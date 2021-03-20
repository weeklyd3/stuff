  	        README file
       Creation Date: 2/24/2021
=======================================
Contents
--------
I. About
  1. Preamble
  2. License
II. Directory Readme
III. How to Contribute
IV. Protections Against Spam
  1. Preamble
  2. Download Code
  3. Keep watch!
V. Client App
--------
I. About
1. Preamble
This is the main repository for the Weekly D3 website. You can start pull requests or edit the code directly. For more information, see How to Contribute.
You can also download the code with no restrictions. Click "Download" and then "Download ZIP".
2. License
The license can be found at one of the following places:
  * https://weeklyd3.github.io/resources/eula.txt
  * https://github.com/weeklyd3/weeklyd3.github.io/blob/main/LICENSE
  * https://raw.githubusercontent.com/weeklyd3/weeklyd3.github.io/main/LICENSE
┌──────────────────────────────────────────────────────────┐
│ WARNING!!!                                               │
│ The last two sources above use a link to a file          │
│ without an extension. Certain browsers may download it   │
│ without a download link even though it is not a download │
│ link. (Chrome should work fine.)                         │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ WARNING!!!                                               │
│ The second link is not a direct link to the file LICENSE.|
└──────────────────────────────────────────────────────────┘
II. Directory Readme
See https://github.com/weeklyd3/weeklyd3.github.io for details.

If you are using something earlier than Chrome 80 (like a Windows XP computer), you can actually explore the directory by typing "ftp://weeklyd3.github.io" without the quotes into your address bar.
Why?
Google is depreceating ftp in Chrome 80.
JUST TELL ME WHY!
If you have visited an ftp link, you've probably noticed the "Not Secure" warning in your address bar.
FTP lacks encryption.
This helps hackers hack into a site and steal private files (e.g. logs of sign-ins).

III. How to Contribute
Run the following code at the prompt to clone the repo:
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/github_files$ git clone https://github.com/weeklyd3/weeklyd3.github.io weeklyd3
Run into any errors? Try this:
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/github_files$ su -
Password:
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/github_files# git clone https://github.com/weeklyd3/weeklyd3.github.io weeklyd3
It should be able to complete as root.

IV. Protections Against Spam
1. Preamble
In a way, we are worse than Camazotz. SPAMBOTS can kill a whole piece of code into advertisements. At least no huge brain can do that.

For example:
  <p>Some good content here...</p>
  <button onclick="spambot()">ACTIVATE THE MASS SPAMMER!</button>
  <script>
    function spambot() {
      //Erase the whole page
      document.close();
      //Opening a closed document erases everything.
      document.open();
      document.write("Please watch the popup window.");
      var mywindow = window.open('', 'BAD CONTENT!!!', 'height=400,width=600');
      //Write intrusive content
      mywindow.document.write('<html><head><title>Sample Scam Advertisement</title>');
      mywindow.document.write('<body><h1>BUY NOW!!!</h1><br><a href="//example.com/offer-buy-now.html">Are you ready for the coolest offer of your life?</a></body></html>');
    }
  </script>
This is only a minor example. Actual spam looks worse. If you suspect spam, please restore the latest good revision.

[rythimic pulsing]
IT HAS ME!

2. Download Code
Download code frequently to hold archives if the online history goes corrupt.
From the repository page, click Download.
 * If you have GitHub Desktop, open with GitHub Desktop and clone the repository.
 * Otherwise, click Download ZIP to download a compressed folder. Afterwards, extract it.
If you suspect spam has corrupted the repo, upload all files in the compressed folder. Replace any files that are corrupted.

3. Keep Watch!

Keeping watch lets you upload good copies before it's too late. You can alert people the repo is corrupted immediately by deleting the corrupted copies and keeping a log below:

CORRUPTION LOG
For example: At 1/1/2021, 65.222.202.53 (it's okay if you don't know the username or IP address) spammed.
At 2/27/2021, user weeklyd3 made a fatal change and had to recreate the repository.

Type here!
END OF CORRUPTION LOG

V. Client App
There's a way of making a Python file that encloses our website in a Chrome window:

http://weeklyd3.github.io/resources/client.txt
(Rename file to client.py after download)

Run the following code:
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/github_files$ pip install pyinstaller
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/github_files$ cd ../python_files/
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/python_files$ echo This will create ./dist/client, with client, the Unix executable file.
This will create ./dist/client, with client, the Unix executable file.
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/python_files$ pyinstaller --hidden-import="json" client.py
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/python_files$ cd ./dist/client
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/python_files/dist/client$ .. client
AAAA.AAAA@BARF-AAAAAAAAAA:/home/AAAA.AAAA/python_files$ exit

┌──────────────────────────────────────────────────────────┐
│ NOTE:                                                    │
│ Replace "~/python_files" with the directory containing   │
│ the file "client.py". Otherwise, the commands will break.│
└──────────────────────────────────────────────────────────┘
