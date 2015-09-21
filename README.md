# Unitform JS <code>v2</code>


A lightweight Form element (Select, Radio, Checkbox, File upload) Styling jQuery Plugin.

Style HTML forms with CSS.

### Install

<code>bower install --save-dev unitform</code>

*OR*

Include <code>unitform.min.js</code>, include <code>unitform.css</code>, define plugin (see below). 

### How do define?

To add Unitform to one selectbox:

<pre>$('select').unitform();</pre>

Or, to add it to multiple form elements:

<pre>$('select, input[type="radio"], input[type="checkbox"], input[type="file"]').unitform();</pre>

Or, to add to an upload only, with custom options:

<pre>
$('input[type="file"]').unitform({
	fileHelperText: 'Select a File',
	fileHelperButton: 'Add File'
});
</pre>

<code>fileHelperText</code> string - text before a file is selected, defaults to "No File Selected"

<code>fileHelperButton</code> string - file button text, defaults to "Upload"

### Style

<code>unitform.less</code> - For use with the [FE Baseplate](https://github.com/wahnbriefe/front-end-baseplate)

<code>unitform.css</code> - (min) can be included anywhere as base theme