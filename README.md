# reallysimplehtmltemplating

reallysimplehtmltemplating depends on jquery.

reallysimplehtmltemplating contains a single function named rsht. Call this function as part of an init script to your program:

```
$(document).ready(function() {
	rsht();
});
```

reallysimplehtmltemplating allows you to split a really long html page into smaller fragments. To do this create a file with html content and put it somewhere relative to the master html file. Then create a div (or any other html element) with the class "rsht" and a link to the html fragment in the src attribute as follows:

```
<div class="rsht" src="page/loginMenu.html"></div>
```    

This will take the contents of 'loginMenu.html' and create it as html content of the div.

You can include javascript in your html fragment by simply adding a <script> tag inside.
  
If you have other initialisation logic that must happen after the templating has occured, you can pass a function to the rsht function which will get called when it is finished:

```
$(document).ready(function() {
  rsht(function() {
    // other initialisation logic
  });
});
```

