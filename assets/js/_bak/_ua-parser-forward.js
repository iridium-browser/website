---
sitemap:
  exclude: "yes"
---
function uaParser() {
	var parser = new UAParser();
	var result = parser.getResult();
	var os_name = result.os.name;
	if (os_name == "Windows") { window.location="{{'/downloads/windows' | relative_url}}"; }
	else if (os_name == "Mac OS") { window.location="{{'/downloads/macOS' | relative_url}}"; } 
	else if (os_name == "Ubuntu") { window.location="{{'/downloads/debian' | relative_url}}"; }
	else if (os_name == "Debian") { window.location="{{'/downloads/debian' | relative_url}}"; }
	else if (os_name == "Mint") { window.location="{{'/downloads/debian' | relative_url}}"; }
	else if (os_name == "SUSE") { window.location="{{'/downloads/suse' | relative_url}}"; }
	else if (os_name == "Fedora") { window.location="{{'/downloads/fedora' | relative_url}}"; }
	else if (os_name == "RedHat") { window.location="{{'/downloads/rhel' | relative_url}}"; }
	else if (os_name == "CentOS") { window.location="{{'/downloads/rhel' | relative_url}}"; }
	else { window.location="{{'/downloads/' | relative_url}}"; }
}