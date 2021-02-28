/*Functions that do not work:
*** download
*** Font size (view)
*/
function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>Print This Post</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}
function load_js()
{
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    console.log('--> Preparing to reload script file...')
    document.getElementById('pleasewait').innerHTML="Please wait...";
    script.src= '/resources/script.js';
    head.appendChild(script);
    console.log('SUCCESS: Finished reloading script file!')
    document.getElementById('pleasewait').innerHTML="Process not started";
    document.getElementById('update').close();
    document.getElementById('updatedone').showModal();
}
function showTab(evt, cityName) {
    //Insert blank line for readibility
    console.log("           ");
    // Declare all variables
    console.log('--> Starting to open tab "'+cityName+'"...');
    console.log("--> Declaring variables...");
    var i, tabcontent, tablinks;
    console.log("SUCCESS: Variables loaded.");

    // Get all elements with class="tabcontent" and hide them
    console.log("--> Hiding unnecessary tabs...")
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
console.log("Resource Loader is initializing...");
console.log("Initializing editor...");
var authorName;
var articleTitle;
console.log("Contacting server...");
console.log("Downloading and loading files...");
console.log("LOADED: script.js");
console.log("LOADED: editor-raw.html");
console.log("LOADED: style.css");
console.log("LOADED: editor-style.css");
console.log("Loading login overlay...");
document.getElementById('login').showModal();
console.log("Finished loading essential files.");

/*
**
** EXPERIMENTAL FEATURES: Use at own risk.
**
*/
function insertAtCursor(dummy, myValue) {
    //IE support
    if (document.selection) {
        dummy.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (dummy.selectionStart || dummy.selectionStart == '0') {
        var startPos = dummy.selectionStart;
        var endPos = dummy.selectionEnd;
        dummy.value = dummy.value.substring(0, startPos)
            + myValue
            + dummy.value.substring(endPos, dummy.value.length);
    } else {
        dummy.value += myValue;
    }
    console.log('SUCCESS: Inserted text "'+myValue+'" at cursor!')
}
function hyperlink() {
    console.log("--> Collecting user input...")
    var var1 = document.getElementById('hyperlink1').value;
    var var2 = document.getElementById('hyperlink2').value;
    var text2insert = '<a href="' + var1 + '" target="_blank" rel="noreferrer noopener">' + var2 + '</a>';
    console.log("SUCCESS: Finished gathering information!")
    insertAtCursor(writehere, text2insert);
    document.getElementById('hyperlink3').innerHTML = "A link has been inserted for the first time. Now you know how to do this!"
    document.getElementById('hyperlink').close();
}
function image() {
    console.log("--> Collecting user input...")
    var var1 = document.getElementById('image1').value;
    var var2=document.getElementById('image2').value;
    var var3=document.getElementById('image3').value;
    var text2insert = '<img src="' + var1 + '" alt="'+var2+'" title="'+var3+'" />'
    console.log("SUCCESS: Finished gathering information!")
    insertAtCursor(writehere, text2insert);
    document.getElementById('image2').innerHTML = 'First run completed. Thanks for using this tool!';
    document.getElementById('image').close();
}
function download() {
    document.getElementById('download').showModal();
    var text2download=document.getElementById('writehere').value;
    var rawurl="data:text/plain;charset=US-ASCII;base64,"+text2download;
    var url=rawurl.replace(/\n|\r/g, "<br>");
    document.getElementById('download2').innerHTML=url;
    document.getElementById('download1').href=url;
}
function zoom() {
    var zoomlevel=document.getElementById('zoom1');
    var zoomlevelstring=toString(zoomlevel);
    document.getElementById("writehere").style.fontSize=zoomlevelstring+"px";
}
function preview() {
    console.log("--> Opening preview modal")
    document.getElementById("preview").showModal();
    console.log("--> Collecting user input...")
    var rawtext=document.getElementById('writehere').value;
    var goodtext1='<style>#AAAAAAAAAA { font-family:"Times New Roman"; } </style><pre id="AAAAAAAAAA">'+rawtext+'</pre>';
    document.getElementById('preview1').innerHTML=goodtext1;
    console.log("SUCCESS: Finished gathering information!")
    console.log("SUCCESS: Preview started playing. Have fun!")
}
function login() {
    var authorName;
    var articleTitle;
    console.log("--> Collecting user input...")
    var authorName=document.getElementById('login1').value;
    var articleTitle=document.getElementById('login2').value;
    console.log("--> Validating user input...")
    if (authorName=="" || articleTitle=="") {
        console.log("FAILURE: Validation error returned.")
        document.getElementById('login0').innerHTML="Some fields are blank. Not okay.";
    } else {
        console.log("SUCCESS: Validation passed!")
        document.getElementById('login').close();
        if (authorName=='Administrator') {
            adminpass=prompt("Enter the administrator password:")
            if (adminpass=="timothy") {
                alert("You are now logged in as Administrator.")
            } else {
                alert("Wrong password, please try again.");
                document.getElementById('login').showModal();
            }
        }
    }
}
function writeSelection(textbefore, textafter) {
var selectionText = yourTextarea.value.substr(yourTextarea.selectionStart, yourTextarea.selectionEnd);
yourTextarea.value = textbefore+ selectionText + textafter;
}
function CreatePDFfromHTML() {
    var HTML_Width = $("#preview1").width();
    var HTML_Height = $("#preview1").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($(".html-content")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save("MyDocument.pdf");
        //$(".html-content").hide();
    });
}
//EOF
