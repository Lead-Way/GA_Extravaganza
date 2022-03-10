document.addEventListener('DOMContentLoaded', function(event) {


// when I click on the hamburfer icon
document.querySelector(".nav-toggle").addEventListener ("click", function (e)){}

// prevent link from working
e.preventDefault();
// add or remove the mobile hige class
document.querySelector(".main-nav").classList.toggle("main-nav-mobilehide");

});
});