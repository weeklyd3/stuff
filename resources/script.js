/*Functions that do not work:
 *** download [fixed on 3/22/2021]
 *** Font size (view) [fixed on 3/22/2021]
 */
function myConfirmation() {
	return "Changes aren't automatically saved. Continue?";
}

function auto_height(elem) {
	/* javascript */
	elem.style.height = "1px";
	elem.style.height = elem.scrollHeight + "px";
}
function track(e) {
	var message='Mouse: '+e.clientX+', '+e.clientY; 
	document.getElementById('mouse').innerHTML=message; 
}
// Access content in iframe
var ifrm = document.getElementById("writehere");
ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
window.onbeforeunload = myConfirmation;
function getEmbedSelection(iframe) {
	var win = iframe.contentWindow;
	var doc = iframe.contentDocument || win.document;

	if (win.getSelection) {
		return win.getSelection().toString();
	} else if (doc.selection && doc.selection.createRange) {
		return doc.selection.createRange().text;
	}
}
function dizzy() {
	console.log("You are scrolling. I am DIZZY.");
}
window.onscroll = function() {
	dizzy();
};

function PrintElem(elem) {
	var mywindow = window.open("", "PRINT", "height=400,width=600");
	mywindow.document.write("<html><head><title>Print This Post</title>");
	mywindow.document.write("</head><body >");
	mywindow.document.write(document.getElementById(elem).innerHTML);
	mywindow.document.write("</body></html>");
	mywindow.document.close(); // necessary for IE >= 10
	mywindow.focus(); // necessary for IE >= 10*/
	mywindow.print();
	mywindow.close();
	return true;
}
function load_js() {
	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	console.log("--> Preparing to reload script file...");
	document.getElementById("pleasewait").innerHTML = "Please wait...";
	script.src = "/resources/script.js";
	head.appendChild(script);
	console.log("SUCCESS: Finished reloading script file!");
	document.getElementById("pleasewait").innerHTML = "Process not started";
	document.getElementById("update").close();
	document.getElementById("updatedone").showModal();
}
function insert(dahtml) {
	var sel, range;
	if (ifrm.getSelection) {
		// IE9 and non-IE
		sel = ifrm.getSelection();
		if (sel.getRangeAt && sel.rangeCount) {
			range = sel.getRangeAt(0);
			range.deleteContents();

			// Range.createContextualFragment() would be useful here but is
			// non-standard and not supported in all browsers (IE9, for one)
			var el = document.createElement("div");
			el.innerHTML = dahtml;
			var frag = document.createDocumentFragment(),
				node,
				lastNode;
			while ((node = el.firstChild)) {
				lastNode = frag.appendChild(node);
			}
			range.insertNode(frag);

			// Preserve the selection
			if (lastNode) {
				range = range.cloneRange();
				range.setStartAfter(lastNode);
				range.collapse(true);
				sel.removeAllRanges();
				sel.addRange(range);
			}
		}
	}
}
function showTab(evt, cityName) {
	//Insert blank line for readibility
	console.log("           ");
	// Declare all variables
	console.log('--> Starting to open tab "' + cityName + '"...');
	console.log("--> Declaring variables...");
	var i, tabcontent, tablinks;
	console.log("SUCCESS: Variables loaded.");

	// Get all elements with class="tabcontent" and hide them
	console.log("--> Hiding unnecessary tabs...");
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	console.log("SUCCESS: Unwanted material hidden.");

	// Get all elements with class="tablinks" and remove the class "active"
	console.log("--> Removing active class on unwanted material...");
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	console.log("SUCCESS: Unnecessary active classes removed.");

	// Show the current tab, and add an "active" class to the button that opened the tab
	console.log("--> Showing tab...");
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
	console.log("SUCCESS: Display change completed.");
	console.log("SUCCESS: Tab change completed.");
	//Display empty console line
	console.log("             ");
}
//Execute when page loads
//Kinda like autoexec.bat on MS-DOS, but worse.
/*
┌────────────────────────────────────────────────────────────────────────┐
| LOCATION: My Computer >> Devices >> Disks >> C:                  --> X |
│ Name             | Type               | Description                    │
│ autoexec.bat     | Windows Batch File | Execute lines at startup.      |
└────────────────────────────────────────────────────────────────────────┘
*/

$("body").keydown(function (e) {
	console.log("INFO: Whoa! You are pressing key code " + e.which + "! Great job!");
});

console.log("Resource Loader is initializing...");
console.log("Initializing editor...");
var authorName;
var articleTitle;
console.log("Contacting server...");
console.log("Downloading and loading files...");
(function() {
	if (screen.height <= 480 || screen.width <= 640) {
		document.getElementById("smallscreen").showModal();
		console.log("user's screen is very small.");
	}
})();
console.log("LOADED: script.js");
console.log("LOADED: editor-raw.html");
console.log("LOADED: style.css");
console.log("LOADED: editor-style.css");
setTimeout(function() {
	document.getElementById("load1").innerHTML = "Check your internet connection. This is taking longer than it should...";
}, 5000);
console.log("Loading login overlay...");
console.log("Opening 'Home' tab...");
document.getElementById('homebutton').click();
document.getElementById("writehere").focus();
console.log("Finished loading essential files.");

/*
 **
 ** EXPERIMENTAL FEATURES: Use at own risk.
 **
 */
function hyperlink() {
	console.log("--> Collecting user input...");
	var var1 = document.getElementById("hyperlink1").value;
	var var2 = document.getElementById("hyperlink2").value;
	document.getElementById("writehere").focus();
	ifrm.document.getElementById("writehere").focus();
	insert('<a href="' + var1 + '" target="_blank" rel="norefererr noopener">' + var2 + "</a>");
	document.getElementById("hyperlink3").innerHTML = "A link has been inserted for the first time. Now you know how to do this!";
	document.getElementById("hyperlink").close();
}
function image() {
	console.log("--> Collecting user input...");
	var var1 = document.getElementById("image1").value;
	var var2 = document.getElementById("image2").value;
	var var3 = document.getElementById("image3").value;
	insert('<img src="' + var1 + '" alt="' + var2 + '" title="' + var3 + '" />');
	console.log("SUCCESS: Finished gathering information!");
	document.getElementById("image2").innerHTML = "First run completed. Thanks for using this tool!";
	document.getElementById("image").close();
}
function zoom() {
	var zoomlevel = document.getElementById("zoom1").value;
	var zoomstyle = document.getElementById("zoomLevel");
	// Delete previous zoom level data
	zoomstyle.innerHTML = "";
	// Set new zoom level
	console.log("--> Setting zoom level to: " + zoomlevel + "...");
	zoomstyle.innerHTML = "<style>button { font-size: " + zoomlevel + "pt; } </style>";
	console.log("SUCCESS: Complete.");
	document.getElementById("zoom").close();
}
function preview() {
	console.log("--> Opening preview modal");
	document.getElementById("preview").showModal();
	console.log("--> Collecting user input...");
	var authorname = document.getElementById("authorSpace").innerHTML;
	var articletitle = document.getElementById("titleSpace").innerHTML;
	var rawtext = ifrm.document.getElementById("writehere").innerHTML;
	var goodtext1 = rawtext;
	document.getElementById("preview1").innerHTML = goodtext1;
	document.getElementById("preview0").innerHTML = "Here's a preview of your post, \"" + articletitle + '" by ' + authorname + ".";
	console.log("SUCCESS: Finished gathering information!");
	console.log("SUCCESS: Preview started playing. Have fun!");
	document.getElementById("preview2").style.display = "none";
}
function quote() {
	var quotedtext = document.getElementById("quote1").value;
	var speaker = document.getElementById("quote2").value;
	document.getElementById("writehere").focus();
	ifrm.document.getElementById("writehere").focus();
	insert("<blockquote>" + quotedtext + "<br>" + "− " + speaker + "</blockquote><div>Text after blockquote");
	document.getElementById("quote").close();
}
function login() {
	var authorName;
	var articleTitle;
	console.log("--> Collecting user input...");
	var authorName = document.getElementById("login1").value;
	var articleTitle = document.getElementById("login2").value;
	//Store some info in the information panel
	document.getElementById("authorSpace").innerHTML = authorName;
	fix("authorSpace", authorName);
	fix("titleSpace", articleTitle);
	console.log("--> Validating user input...");
	if (authorName === "" || articleTitle === "") {
		console.log("FAILURE: Validation error returned.");
		if (document.getElementById("login0").innerHTML === "Some fields are blank. Not okay.") {
			document.getElementById("login0").innerHTML = "Do you think I'm going to change my mind? Some elements are blank!";
		} else {
			document.getElementById("login0").innerHTML = "Some fields are blank. Not okay.";
		}
	} else {
		console.log("SUCCESS: Validation passed!");
		document.getElementById("login").close();
		if (authorName === "Administrator") {
			document.getElementById("login0").innerHTML = "Enter the administrator password to complete login.";
			adminpass = prompt("Enter the administrator password:");
			if (adminpass === "timothy") {
				alert("You are now logged in as Administrator.");
			} else {
				alert("Wrong password, please try again.");
				document.getElementById("login").showModal();
				document.getElementById("login0").innerHTML = "The administrator password is incorrect.";
			}
		}
	}
	document.getElementById("writehere").focus();
}
function download() {
	var textToWrite = ifrm.document.getElementById("writehere").innerHTML;
	var textFileAsBlob = new Blob([textToWrite], { type: "text/html" });
	var articletitle = document.getElementById("titleSpace").innerHTML;
	var fileNameToSaveAs = document.getElementById("filename").value + ".html";
	if (fileNameToSaveAs === ".html") {
		fileNameToSaveAs = "Untitled.html";
	}
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
	document.getElementById("download").close();
}
function writeSelection(writehere, myValueBefore, myValueAfter) {
	if (document.selection) {
		writehere.focus();
		document.selection.createRange().text = myValueBefore + document.selection.createRange().text + myValueAfter;
	} else if (writehere.selectionStart || writehere.selectionStart === "0") {
		var startPos = writehere.selectionStart;
		var endPos = writehere.selectionEnd;
		writehere.value = writehere.value.substring(0, startPos) + myValueBefore + writehere.value.substring(startPos, endPos) + myValueAfter + writehere.value.substring(endPos, writehere.value.length);
	}
}
function font() {
	var newfont = document.getElementById("fontspace").value;
	var range = ifrm.getSelection().getRangeAt(0);
	var selectionContents = range.extractContents();
	var div = document.createElement("span");
	div.style.fontFamily = newfont;
	div.appendChild(selectionContents);
	range.insertNode(div);
}
function fontsize() {
	var newfontsize = document.getElementById("fontsizespace").value;
	var range = ifrm.getSelection().getRangeAt(0);
	var selectionContents = range.extractContents();
	var div = document.createElement("span");
	div.style.fontSize = newfontsize + "pt";
	div.appendChild(selectionContents);
	range.insertNode(div);
}
function fix(place, text) {
	// Excuse my terrible variable names.
	console.log("--> Fix starting...");
	var newselection = text.replace(/&/g, "&amp;");
	var othernewselection = newselection.replace(/>/g, "&gt;");
	var otherothernewselection = othernewselection.replace(/</g, "&lt;");
	text = otherothernewselection;
	document.getElementById(place).innerHTML = text;
	console.log("SUCCESS: Fix completed!");
}
function lineheight() {
	var newlh = document.getElementById("lhspace").value;
	var range = ifrm.getSelection().getRangeAt(0);
	var selectionContents = range.extractContents();
	var div = document.createElement("span");
	div.style.lineHeight = newlh;
	div.appendChild(selectionContents);
	range.insertNode(div);
}
/*Formatting functions
----------------------------------------------------*/
/* Yo cursor doesn't look like █! */
function h(number) {
	if (number != 0) {
		var range = ifrm.getSelection().getRangeAt(0);
		var selectionContents = range.extractContents();
		var div = document.createElement("h" + number);
		div.appendChild(selectionContents);
		range.insertNode(div);
	} else {
		var range = ifrm.getSelection().getRangeAt(0);
		var selectionContents = range.extractContents();
		var div = document.createElement("span");
		div.style.fontSize = null;
		div.style.backgroundColor = null;
		div.style.color = null;
		div.appendChild(selectionContents);
		range.insertNode(div);
	}
}
function strip(html) {
	var tempDiv = document.createElement("DIV");
	tempDiv.innerHTML = html;
	return tempDiv.innerText;
}
function align(scheme) {
	if (scheme === "left") {
		var range = ifrm.getSelection().getRangeAt(0);
		var selectionContents = range.extractContents();
		var div = document.createElement("div");
		div.style.textAlign = "left";
		div.appendChild(selectionContents);
		range.insertNode(div);
	} else if (scheme === "center") {
		var range = ifrm.getSelection().getRangeAt(0);
		var selectionContents = range.extractContents();
		var div = document.createElement("div");
		div.style.textAlign = "center";
		div.appendChild(selectionContents);
		range.insertNode(div);
	} else if (scheme === "right") {
		var range = ifrm.getSelection().getRangeAt(0);
		var selectionContents = range.extractContents();
		var div = document.createElement("div");
		div.appendChild(selectionContents);
		range.insertNode(div);
	}
}
function applystyle() {
	var styles = document.getElementById("css1").value;
	ifrm.document.getElementById("custom").innerHTML = styles;
}
function color() {
	var newcolor = document.getElementById("newcolor").value;
	var range = ifrm.getSelection().getRangeAt(0);
	var selectionContents = range.extractContents();
	var div = document.createElement("span");
	div.setAttribute("style", "color: " + newcolor + " !important;");
	div.appendChild(selectionContents);
	range.insertNode(div);
}
function bgcolor() {
	var newbgcolor = document.getElementById("newbgcolor").value;
	var range = ifrm.getSelection().getRangeAt(0);
	var selectionContents = range.extractContents();
	var div = document.createElement("span");
	div.setAttribute("style", "background-color: " + newbgcolor + " !important;");
	div.appendChild(selectionContents);
	range.insertNode(div);
}
function table() {
	var mytable=document.createElement('table');
	var table_elem=document.createElement('tbody');
	var rows=document.getElementById('table1').value;
	var cols = document.getElementById('table2').value;
	var j;
	for (j = 0; j < rows; j++) {
		table_elem.innerHTML+="<tr>";
		var i;
		for (i = 0; i < cols; i++) {
			var tabledata=document.createElement('td');
			tabledata.innerHTML="insert text here";
			table_elem.appendChild(tabledata);
		}	
		table_elem.innerHTML+="</tr>";
	}
	console.log(table_elem);
	mytable.appendChild(table_elem);
    insert(mytable.outerHTML);
    document.getElementById('table').close();
}

function startspeak() {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
	recognition.lang = "en-US";
	recognition.interimResults = false;
	recognition.maxAlternatives = 5;
	recognition.start();

	recognition.onresult = function (event) {
		console.log("You said: ", event.results[0][0].transcript);
	};
}
/* shortcuts */
ifrm.document.onkeydown = function (e) {
	if (e.ctrlKey && e.which == 75) {
		e.preventDefault();
		document.getElementById('hyperlink').showModal();
	} else if (e.ctrlKey && e.which == 83) {
		e.preventDefault();
		document.getElementById('download').showModal();
	} else if (e.ctrlKey && e.which == 80) {
		e.preventDefault();
		ifrm.print();
	}
};
//EOF
