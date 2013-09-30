/*
 * name: sis_extension.js
 *
 * description: This javascript file is responsible for 
 *				making requests to retrieve the various other
 *				files required, such as the CSS files.
 *
 * author: Thomas DeMeo
 *			thomasdemeo@gmail.com
 */

// DO NOT FORGET TO CHANGE THIS TO FALSE WHEN PUSHING LIVE
var testEnvironment = true;

// Test Path
var testPath = 'https://www-staging.rit.edu/its/sisextension/SIS/src';

// Production Path
var prodPath = 'https://people.rit.edu/~tjd9961/SIS/src';

// Adds support for jQuery
// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
    
    var jQueryId = "jQuery";  // you could encode the css path itself to generate id..
    var jQueryUIId = "jQueryUI";
	if (!document.getElementById(jQueryId)) {
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('script');
	    link.id   = jQueryId;
	    link.language  = 'JavaScript';
	    link.type = 'text/javascript';
	    if (testEnvironment){
	    	link.src = testPath + '/js/jquery-1.10.2.min.js';
	    }
	    else{
	    	link.src = prodPath + '/js/jquery-1.10.2.min.js';
	    }
	    head.appendChild(link);
	    
	    // add jQueryUI
	    var uiLink = document.createElement('script');
	    uiLink.id = jQueryUIId;
	    uiLink.language = 'Javascript';
	    uiLink.type = 'text/javascript';
	    if (testEnvironment){
	    	uiLink.src = testPath + '/js/jquery-ui-1.10.3.custom.min.js';
	    }
	    else{
	    	uiLink.src = prodPath + '/js/jquery-ui-1.10.3.custom.min.js';
	    }
	    head.appendChild(uiLink);
	}
    
}

function addCSS() {
	var mainCSSId = "mainCSS";  // you could encode the css path itself to generate id..
	var jqueryUICSS = "jqueryCSS";
	
	if (!document.getElementById(mainCSSId)) {
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = mainCSSId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    if (testEnvironment) {
	    	link.href = testPath + '/css/sis_main.css';
	    }else {
	    	link.href = prodPath + '/css/sis_main.css';
	    }
	    link.media = 'all';
	    head.appendChild(link);
	    
	    var jqueryUILink = document.createElement("link");
	    jqueryUILink.id = jqueryUICSS;
	    jqueryUILink.rel = "stylesheet";
	    jqueryUILink.type = "text/css";
	    if (testEnvironment){
	    	jqueryUILink.href = testPath + '/css/ui-lightness/jquery-ui-1.10.3.custom.min.css';
	    }
	    else{
	    	jqueryUILink.href = prodPath + '/css/ui-lightness/jquery-ui-1.10.3.custom.min.css';
	    }
	    jqueryUILink.media = 'all';
	    head.appendChild(jqueryUILink);
	}
}

function addJavascript() {
	var mainJavascript = "mainJavascript";  // you could encode the css path itself to generate id..
	if (!document.getElementById(mainJavascript)) {
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('script');
	    link.id   = mainJavascript;
	    link.language  = 'JavaScript';
	    link.type = 'text/javascript';
	    if (testEnvironment) {
	    	link.src = testPath + '/js/main.js';
	    }else {
	    	link.src = prodPath + '/js/main.js';
	   	}
	    head.appendChild(link);
	}
}

// load jQuery, css and javascript files
addJQuery();
addCSS();
addJavascript();