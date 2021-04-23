/* The file used for posting articles
   on the front page. It should be 
   linked with type="module".  But if
   you have type module, you have to 
   export the functions! */
var daheader=new Headers();
daheader.append("Access-Control-Allow-Origin","*");
function upload() {
	try {
		var date=new Date();
		document.getElementById('posterr').value+="INFO: Post is starting at "+date+". Please wait...";
		var collectdata=new Date();
		document.getElementById('posterr').value+="\nINFO: Collecting input... ("+collectdata+")";
		var oldtitle=document.getElementById('titleSpace').innerHTML;
		var newtitle=oldtitle.replace(/ /g,"-");
		var oldauthor=document.getElementById('authorSpace').innerHTML;
		var newauthor=oldauthor.replace(/ /g,"-");
		var ifrm = document.getElementById('writehere');
		ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
		var formData=new FormData();
		var article_contents=ifrm.document.getElementById('writehere').innerHTML;
		var filetowrite=new Blob([article_contents], {
			type: 'text/html'
		});
		formData.append('article',filetowrite,newtitle+"-"+newauthor+".html")                
		$.ajax({
			url: 'https://uploader.weeklyd3.repl.co/index.php', // point to server-side PHP script 
			dataType: 'text',  // what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: formData,
			enctype : "multipart/form-data",
			type: 'post',
			success: function(php_script_response){
				document.getElementById('posterr').value+="\nMessage from uploader: "+php_script_response;
				console.log(php_script_response); // display response from the PHP script, if any
			}
		});
	} catch(err) {
		console.error('AN ERROR OCCURED. THIS OBJECT MIGHT HELP: '+err);
		document.getElementById('posterr').value+="\nError: "+err;
	}
}
function save() {
  var textToWrite = document.getElementById('posterr').value;
  var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
  var fileNameToSaveAs = "backup.txt"; //filename.extension

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}
function destroyClickedElement(event) {
  // remove the link from the DOM
  document.body.removeChild(event.target);
}