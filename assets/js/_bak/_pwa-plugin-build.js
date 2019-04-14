/// PWA Plugin register
window.onload = function () {
    var script = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'XXX?v=' + Date.now();
    firstScript.parentNode.insertBefore(script, firstScript);
};