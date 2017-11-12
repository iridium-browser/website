var parser = new UAParser();
var result = parser.getResult();
var os_name = result.os.name;
if (os_name == "Windows") { window.location="windows"; }
else if (os_name == "Mac OS") { window.location="macOS"; } 
else if (os_name == "Ubuntu") { window.location="linux"; }
else if (os_name == "Debian") { window.location="linux"; }
else if (os_name == "Linux") { window.location="linux"; }
else if (os_name == "SUSE") { window.location="linux"; }
else if (os_name == "CentOS") { window.location="linux"; }
else if (os_name == "Fedora") { window.location="linux"; }
else if (os_name == "DragonFly") { window.location="linux"; }
else if (os_name == "Gentoo") { window.location="linux"; }
else if (os_name == "Mint") { window.location="linux"; }
else if (os_name == "RedHat") { window.location="linux"; }
else if (os_name == "Slackware") { window.location="linux"; }
else if (os_name == "VectorLinux") { window.location="linux"; }
else { window.location="/downloads/sorry"; }
