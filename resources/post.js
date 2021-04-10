/* The file used for posting articles
   on the front page. It should be 
   linked with type="module".  But if
   you have type module, you have to 
   export the functions! */
var ifrm = document.getElementById('writehere');
ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;