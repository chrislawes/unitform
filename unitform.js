
/*--------------------------------------------------------------------------------------------------------------

		JQuery Unitform Plug-in (v1.0)

			by Chris Lawes
			at The Unit (@theunitgb)

--------------------------------------------------------------------------------------------------------------*/

$.fn.unitform = function(options)
// @param {array} options - accept settings from plugin defining
{


	/*----------------------------------------------------------------------------------------------------------
		SETTINGS
	----------------------------------------------------------------------------------------------------------*/
	
	// settings if nothing is passed in from defining plugin
	var defaults = {};

	// use config.var to use user option with defult fallback
	var config = $.extend({}, defaults, options);

	// base settings
	var $self = $(this.selector),
		inputType;


	/*----------------------------------------------------------------------------------------------------------
		HELPERS
	----------------------------------------------------------------------------------------------------------*/

	// global helper - check if this selector is checked and change parent class
	// @param {array} selector - jquery selector
	function ifChecked(selector)
	{
		if ($(selector).is(':checked'))
		{
			$(selector).parent('span').addClass('checked');
		}
		else
		{
			$(selector).parent('span').removeClass('checked');
		}
	}

	// change radio/check markup function 
	// use: check if already checked (on load) and toggle class
	// use: bind to click to toggle active class
	// @param {array} selector - jquery selector
	function radioCheck_markup(selector)
	{

		// define type of element, used for wrapper claass
		if ($(selector).is(':radio'))
		{
			inputType = 'radio';
		}
		else
		{
			inputType = 'checkbox';
		}

		// add wrapper
		$(selector).wrap('<div class="unitform_' + inputType + '"><span></span></div>');

		// if it's already checked, add checked class
		ifChecked(selector)

	}

	// change selectbox markup; add wrapper, span for value (+ span for arrow?)
	// @param {array} selector - jquery selector
	function select_markup(selector)
	{

		// add wrapper and spans for value (and em for arrow)
		$(selector).wrap('<div class="unitform_selector"></div>').parent().append('<span>' + $(selector).val() + '</span> <em>Arrow</em>');

	}

	// on change (selectbox) - change class and 1st span content
	// @param {array} selector - jquery selector
	function select_onChange(selector)
	{
		
		// find new value, pass to parents span
		$(selector).parent().find('span').text($(selector).val());
		
	}

	// on change (radio) - change class of this if the thing (passed in) un/checked
	// remove checked class from all other radios in this group
	// @param {array} selector - jquery selector
	function radio_onChange(selector)
	{

		// find the group this radio belongs to (via their shared name)
		var thisGroupName = $(selector).attr('name');

		// loop all radios with this name, uncheck and remove active class
		$('input:radio[name=' + thisGroupName +']').each(function()
		{
			$(this).prop('checked', false).parent('span').removeClass('checked');
		});
		
		// add active class to the one clicked
		$(selector).prop('checked', true).parent('span').addClass('checked');

	}

	// on change (checkbox) - change class of this if the thing (passed in) un/checked
	function check_onChange(selector)
	{

		// run if checked helper function
		ifChecked(selector);

	}

	/*----------------------------------------------------------------------------------------------------------
		MAIN PLUG-IN
	----------------------------------------------------------------------------------------------------------*/

	// don't run if none of the elements are on this page
	if ($self.length)
	{

		// foreach form element passed in
		$self.each(function()
		{

			// if this is a selectbox
			if ($(this).is('select'))
			{

				// change markup helper function
				select_markup(this);

				// bind change helper function to this
				$(this).bind('change', function()
				{
					select_onChange(this);
				});
				
			}
			else if ($(this).is(':radio'))
			{

				// change markup helper function
				radioCheck_markup(this);

				// bind to on change function
				$(this).bind('change', function()
				{
					radio_onChange(this);
				});

			// else if this is a checkbox
			}
			else if ($(this).is(':checkbox'))
			{

				// change markup helper function
				radioCheck_markup(this);

				// bind to same on change function
				$(this).bind('change', function()
				{
					check_onChange(this);
				});
			
			}

		});

	}


}; // End; unitform plug-in

