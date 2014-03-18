
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

	// change radio/check markup function 
	// check if already checked (on load) and toggle class
	// @param {array} selector - jquery selector
	function radioCheck_markup($selector)
	{


		// define type of element, used for wrapper claass
		if (this.is(':radio'))
		{
			inputType = 'radio';
		}
		else
		{
			inputType = 'checkbox';
		}

		// add wrapper
		$selector.wrap('<div class="unitform_' + inputType + '"></div>');

		// add styleable elements
		$selector.append('<span>');

		// if it's already checked, add checked class
		if ($selector.is(':checked'))
		{
			$selector.find('> span').addClass('checked');
		}
		else
		{
			$selector.find('> span').removeClass('checked');
		}

	}

	// change selectbox markup; add wrapper, span for value (+ span for arrow?)
	// @param {array} selector - jquery selector
	function select_markup($selector)
	{

		// add wrapper
		$selector.wrap('<div class="unitform_selector"></div>');

		// add spans for value and arrow


	}

	// on change (selectbox) - change class and 1st span content

	// on change (radio/check) - change class of this if the thing (passed in) un/checked


	/*----------------------------------------------------------------------------------------------------------
		MAIN PLUGIN
	----------------------------------------------------------------------------------------------------------*/

	// don't run if none of the elements are on this page
	if ($self.length)
	{

		// foreach form element passed in
		$self.each(function()
		{

			// if this is a selectbox
			if (this.is('select'))
			{

				// change markup helper function
				select_markup(this);

				// bind change helper function to this
				this.bind("change", function() // bind change outside of document ready?!
				{
				});

			// else if this is a radio
			}
			else if (this.is(':radio'))
			{

				// change markup helper function
				radioCheck_markup(this);

				// bind to on change function

			// else if this is a checkbox
			}
			else if (this.is(':checkbox'))
			{

				// change markup helper function
				radioCheck_markup(this);

				// bind to same on change function

			// else (none of the above) 
			}
			else
			{

				console.log('(selectbox, radio or checkbox only please) what even is ' + this);

			}

		}

	}


}; // End; unitform plug-in

