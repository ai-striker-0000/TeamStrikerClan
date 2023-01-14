var url = "/errors/warning.html";
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 83 || 
         e.keyCode === 73 || 
         e.keyCode === 27 || 
         e.keyCode === 117)) {
        alert('not allowed');
        window.location = url;
        return false;
    } else {
        return true;
    }
};
