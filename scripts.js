/**
 * willfloyd.com javascript loader
 * 
 * dynamic script loading
 * because I can and
 * you can't stop me
 * 
 * @todo: I should add some js to this project...
 */

// load your scripts here
// dynamicallyLoadScript('js/card-height.js');

// script loading function
function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); // create a script DOM node
    script.src = url; // set its src to the provided URL
    document.body.appendChild(script); // add to end of body
}