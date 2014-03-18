
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
	var $defaults = {};

	// use config.var to use user option with defult fallback
	var $config = $.extend({}, defaults, options);

	// base settings
	var $this = $(this.selector);


	/*----------------------------------------------------------------------------------------------------------
		HELPERS
	----------------------------------------------------------------------------------------------------------*/

	// change radio/check markup function (same, but diffrent class) - check if already checked (on load) and toggle class

	// on change (selectbox) - change class and 1st span content

	// on change (radio/check) - change class of this if the thing (passed in) un/checked


	/*----------------------------------------------------------------------------------------------------------
		MAIN PLUGIN
	----------------------------------------------------------------------------------------------------------*/

	// if $(this.selector) (don't run if none of the elements are on this page)
	if($this.length)
	{
		// foreach "$this"

			// if this is a selectbox

				// (change markup) wrapper, span for value (+ span for arrow?)

				// bind change helper function to this

			// if this is a radio (change markup)

				// pass in this to change markup helper function

				// bind to on change function

			// if this is a checkbox (change markup)

				// pass in this to change markup helper function

				// bind to same on change function

			// else (none of the above) 

				// log error
	}


}; // End; unitform plug-in

