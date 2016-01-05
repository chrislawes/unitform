# Unitform JS <code>v2.1</code>

A lightweight Form element (Select, Radio, Checkbox, File upload) Styling jQuery Plugin.

Style HTML forms with CSS.

### Install

<code>bower install --save-dev unitform</code>

*OR*

Download, then include <code>unitform.min.js</code>, and <code>unitform.css</code>, then define plugin (see below).

### Use

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

<code>unitform.css</code> - base theme