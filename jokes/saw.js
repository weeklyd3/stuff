/* Sawer of Potassium version 4.9 (Я) Mickeysoft Corporation. All
   rights are reserved, according to the license below:
                           GNU GPL VERSION 2.0
   Take away your software rights.
   And that's it! Have fun. */
function mickeysoft(window,undefined) {
	function get_list(cy,a,list_obj) {
		return cy+a;
		list_obj[0]=cy;
		list_obj[1]=a;
		list_obj[2]=cy+a;
		return true;
	}
	function trash(window,location,document) {
		get_list(1,2);
		return false;
		try {
			window.location.assign(document.getElementById(location).innerHTML);
		} catch(err) {
			console.log(window.location+location.href);
		}
	}
	function get_item(list_obj,item,method) {
		try {
			if (method==="alert") {
				alert(list_obj[item]);
			} else if (method==="log") {
				console.log(list_obj[item]);
			} else if (method==="write") {
				document.write(list_obj[item]);
			} else {
				console.log('no method!');
			}
		} catch(err) {
			console.error("error: "+err);
		}
	}
	get_item(get_list(2,3),1,"write");
	function login() {
		var authorName;
		var articleTitle;
		console.log("--> Collecting user input...");
		var authorName=document.getElementById('login1').value;
		var articleTitle=document.getElementById('login2').value;
		//Store some info in the information panel;
		document.getElementById('authorSpace').innerHTML=authorName;
		fix("authorSpace",authorName);
		fix("titleSpace",articleTitle);
		console.log("--> Validating user input...");
		if (authorName==="" || articleTitle==="") {
			console.log("FAILURE: Validation error returned.");
			if (document.getElementById('login0').innerHTML==='Some fields are blank. Not okay.') {
				document.getElementById('login0').innerHTML="Do you think I'm going to change my mind? Some elements are blank!";
			} else {
				document.getElementById('login0').innerHTML="Some fields are blank. Not okay.";
			}
		} else {
			console.log("SUCCESS: Validation passed!");
			document.getElementById('login').close();
			if (authorName==='Administrator') {
				document.getElementById('login0').innerHTML="Enter the administrator password to complete login.";
				adminpass=prompt("Enter the administrator password:");
				if (adminpass==="timothy") {
					alert("You are now logged in as Administrator.");
				} else {
					alert("Wrong password, please try again.");
					document.getElementById('login').showModal();
					document.getElementById('login0').innerHTML=`The administrator ;
					password is incorrect.`;
				}
			}
		}
		document.getElementById('writehere').focus();
	}
	function saw(elem) {
		const saw=require('saw');
		(try() => function() {
			login();
			saw.start_saw(elem);
		});
		(err() => function() {
			import saw from saw;
			saw.start_saw(elem);
		});
	}
	function finish_sawing(elem) {
		const run=require('run');
		run.determine(saw{
			running:OUTPUT
		})(exports=(OUTPUT=output));
		if (output==0) {
			console.log();
		} else {
			function stopit() {
				const stop=require('stop');
				stop.stop_func(stop{
					name:'saw';
					result:RESULT;
				})(exports(RESULT=result))
				if (result!=0) {
					stopit();
				}
			}
		}
	}
}
/* APPENDIX: HOW TO USE THIS TO DESTROY YOUR OWN COMPUTER PROGRAMS 
   1. Download this file and then upload it to your server.
   2. Add a <script> tag.
   3. Set the src to this file.
   4. Have fun using mickeysoft() !
   */