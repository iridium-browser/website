
var parser = new UAParser();
var result = parser.getResult();
var os_name = result.os.name;
if (os_name == "Windows") { window.location="/downloads/windows.html"; }
else if (os_name == "Mac OS") { window.location="/downloads/macos.html"; } 
else if (os_name == "Ubuntu") { window.location="/downloads/linux.html"; }
else if (os_name == "Debian") { window.location="/downloads/linux.html"; }
else if (os_name == "Linux") { window.location="/downloads/linux.html"; }
else if (os_name == "SUSE") { window.location="/downloads/linux.html#suse"; }
else if (os_name == "CentOS") { window.location="/downloads/linux.html"; }
else if (os_name == "Fedora") { window.location="/downloads/linux.html#fedora"; }
else if (os_name == "DragonFly") { window.location="/downloads/linux.html"; }
else if (os_name == "Gentoo") { window.location="/downloads/linux.html"; }
else if (os_name == "Mint") { window.location="/downloads/linux.html"; }
else if (os_name == "RedHat") { window.location="/downloads/linux.html#redhat"; }
else if (os_name == "Slackware") { window.location="/downloads/linux.html"; }
else if (os_name == "VectorLinux") { window.location="/downloads/linux.html"; }
else { window.location="/downloads/sorry.html"; }
