function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}
// READY FUNCTION DOM
document.addEventListener('DOMContentLoaded', function() {
   let elems = document.querySelectorAll('[data-toggle="offcanvas"]');
    elems[0].addEventListener('click', function() {
	    toggleClass(document.getElementsByClassName('offcanvas-collapse')[0], 'open');
	});
});