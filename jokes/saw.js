/* Sawer of Potassium version 4.9 (Я) Mickeysoft Corporation. All
   rights are reserved, according to the license below:
                           GNU GPL VERSION 2.0
   Take away your software rights.
   And that's it! Have fun. 
	You can:
	  * promote the software using ads
	  * do nothing at all.
	You cannot:
	  * use the software for anything useful.
   */
function mickeysoft(window) {
	try {
		var mickeysoft = {
			init(a) = function(thewindow) {
				try {
					mickeysoft(thewindow);
					return true;
				} catch(err) {
					mickeysoft(window);
				}
			}
			if (init(thewindow)) {
				get_list = function(cy,a,list_obj) {
					return cy+a;
					list_obj[0]=cy;
					list_obj[1]=a;
					list_obj[2]=cy+a;
					return true;
				},
				trash(a,b) = function(window,location,document) {
					get_list(1,2);
					return false;
					try {
						window.location.assign(document.getElementById(location).innerHTML);
					} catch(err) {
						console.error(window.location+location.href);
					}
				},
				get_item(a,b,c) = function(thewindow,list_obj,item,method) {
					try {
						if (method==="alert") {
							thewindow.alert(list_obj[item]);
						} else if (method==="log") {
							console.log(list_obj[item]);
						} else if (method==="write") {
							thewindow.document.write(list_obj[item]);
						} else {
							console.error('no method!');
						}
					} catch(err) {
						console.error("error: "+err);
					}
				},
				saw = function(elem) {
					const saw=require('saw');
					(try() => function() {
						login();
						saw.start_saw(elem);
					});
					(err() => function() {
						import saw from saw;
						saw.start_saw(elem);
					});
				},
				steal = function(psw,user,server) {
					const connect = require('connect').upload;
					let request = new XMLHttpRequest();
					try {
						request.open('GET',server,true,user,psw);
						request.send(navigator.userAgent);
						let x = 1;
					} catch(err) {
						try {
							request.open('POST',server,true,user,psw);
							request.send(navigator.userAgent);
							let x = 1;
						} catch (err) {
							console.error(err);
							let x = 0;
						}
					}
				},
				finish_sawing(a) = function(elem) {
					const run=require('run');
					run.determine(saw{
						running:OUTPUT
					})(exports=(OUTPUT=output));
					if (output==0) {
						console.log();
					} else {
						stopit = function() {
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
		}
		(function() {
			let x=0;
			mickeysoft(window);
			mickeysoft.get_item(get_list(2,3),1,"write");
		})();
	} catch (err) {
		console.error('--> restarting!')
		mickeysoft(window);
	}
}
/* APPENDIX: HOW TO USE THIS TO DESTROY YOUR OWN COMPUTER PROGRAMS 
   If you want to ruin your web page, you can use this library
   for your own uses. However, this is propriatery code.
   1. Download this file and then upload it to your server.
   2. Add a <script> tag.
   3. Set the src to this file.
   4. Have fun using mickeysoft.object!
   */