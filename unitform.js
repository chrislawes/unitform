/*--------------------------------------------------------------------------------------------------------------

    JQuery Unitform Plug-in (v1.0)

      by Chris Lawes
      at The Unit (@theunitgb)

--------------------------------------------------------------------------------------------------------------*/

$.fn.unitform = function()
{


  /*----------------------------------------------------------------------------------------------------------
    SETTINGS
  ----------------------------------------------------------------------------------------------------------*/

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
    ifChecked(selector);

  }

  // change selectbox markup; add wrapper, span for value (+ span for arrow?)
  // @param {array} selector - jquery selector
  function select_markup(selector)
  {

    // add wrapper and spans for value (and em for arrow)
    $(selector).wrap('<div class="unitform_select"></div>').parent().append('<span>' + $(selector).find('option:selected').text() + '</span> <em>Arrow</em>');

    // $("#yourdropdownid option:selected").text();
    
    // pinch any class names on the select
    // remove, and put them on the new 'unitform_select' wrapper
    
    var thisSelectClass = $(selector).attr('class');
    
    if (thisSelectClass)
    {
      $(selector).removeClass(thisSelectClass).parent('.unitform_select').addClass(thisSelectClass);
    }

    // move disabled attribute if present
    
    if($(selector).attr('disabled')) 
    {
    	$(selector).parent.addClass('disabled');
    }

  }

  // on change (selectbox) - change class and 1st span content
  // @param {array} selector - jquery selector
  function select_onChange(selector)
  {
    
    // find new value, pass to parents span
    $(selector).parent().find('span').html($(selector).find('option:selected').text());
    
  }

  // on focus (selectbox) - change class
  // @param {array} selector - jquery selector
  function select_onFocus(selector)
  {
    
    // find new value, pass to parents span
    $(selector).parent().addClass('focus');
    
  }

  // on blur (selectbox) - change class
  // @param {array} selector - jquery selector
  function select_onBlur(selector)
  {
    
    // find new value, pass to parents span
    $(selector).parent().removeClass('focus');
    
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

  // on focus (radio) - change class
  // @param {array} selector - jquery selector
  function radio_onFocus(selector)
  {
    
    // find new value, pass to parents span
    $(selector).parent().addClass('focus');
    
  }

  // on blur (radio) - change class
  // @param {array} selector - jquery selector
  function radio_onBlur(selector)
  {
    
    // find new value, pass to parents span
    $(selector).parent().removeClass('focus');
    
  }

  // on change (checkbox) - change class of this if the thing (passed in) un/checked
  function check_onChange(selector)
  {

    // run if checked helper function
    ifChecked(selector);

  }

  // on focus (check) - change class
  // @param {array} selector - jquery selector
  function check_onFocus(selector)
  {
    
    // find new value, pass to parents span
    $(selector).parent().addClass('focus');
    
  }

  // on blur (check) - change class
  // @param {array} selector - jquery selector
  function check_onBlur(selector)
  {
    
    // find new value, pass to parents span
    $(selector).parent().removeClass('focus');
    
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

        // bind focus helper function to this
        $(this).bind('focus', function()
        {
          select_onFocus(this);
        });

        // bind focus helper function to this
        $(this).bind('blur', function()
        {
          select_onBlur(this);
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

        // bind focus helper function to this
        $(this).bind('focus', function()
        {
          radio_onFocus(this);
        });

        // bind focus helper function to this
        $(this).bind('blur', function()
        {
          radio_onBlur(this);
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

        // bind focus helper function to this
        $(this).bind('focus', function()
        {
          check_onFocus(this);
        });

        // bind focus helper function to this
        $(this).bind('blur', function()
        {
          check_onBlur(this);
        });
      
      }

    });

  }


}; // End; unitform plug-in

