var daheader=new Headers();
daheader.append("Access-Control-Allow-Origin","*");
function upload() {
	document.getElementById('secondpage').style.display='none';
	document.getElementById('thirdpage').style.display='block';
	var ifrm = document.getElementById("writehere");
	ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
	var articlecontents=ifrm.document.getElementById('writehere').innerHTML;
	var title=document.getElementById('titleSpace').innerHTML;
	title=title.replace(/&lt;/g, "<");
	title=title.replace(/&gt;/g, ">");
	title=title.replace(/&amp;/g, "&");
	var author=document.getElementById('authorSpace').innerHTML;
	author=author.replace(/&lt;/g, "<");
	author=author.replace(/&gt;/g, ">");
	author=author.replace(/&amp;/g, "&");
	var x=document.getElementById('postframe');
	x=x.contentWindow || x.contentDocument;
	x.document.getElementById('option1').value=articlecontents;
	x.document.getElementById('option2').value=title;
	x.document.getElementById('option3').value=author;
	x.document.getElementById('option4').click();
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