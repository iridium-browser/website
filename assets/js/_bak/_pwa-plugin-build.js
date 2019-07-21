/// PWA Plugin register
window.onload = function () {
    var script = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
	script.async = true;
    script.src = 'XXX?v=' + Date.now();
    firstScript.parentNode.insertBefore(script, firstScript);
};