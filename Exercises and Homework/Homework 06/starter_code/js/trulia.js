


// Toggle the navigation

// define the event listner and what clicking will do
document.addEventListener('DOMContentLoaded', function(event) {

// Target trulia-nav-toggle to apply click eveny
  document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
    
    // prevent default refreshing page
    e.preventDefault();

    // create navSet as an array and select first layer nav ul under trulia-nav
    let navSet  = document.querySelectorAll('.trulia-nav > nav ul');
   
    // run a loop to go through every navSet and toggle   'trulia-nav-mobilehide' on and off from the classList
    for(let n=0;n<navSet.length;n++){
        navSet[n].classList.toggle('trulia-nav-mobilehide');
    }
  }
)});



let truliaCards = document.getElementsByClassName("trulia-grid-item");

document.addEventListener('DOMContentLoaded', function(event) {
  // Loop through all the cards
for (var i = 0; i < truliaCards.length; i++){

    // Add a click listener on each card
    truliaCards[i].addEventListener("click", function(){
// console.log ("oompa loompa")
      // Remove the featured class
      for (var q = 0; q < truliaCards.length; q++){
        truliaCards[q].classList.remove('trulia-featured-grid-item');
      }
        // Add the featured class on the one clicked on
        this.classList.add('trulia-featured-grid-item');
      });    
  } 
}); 








