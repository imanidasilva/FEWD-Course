let truliaCards = document.getElementsByClassName("trulia-grid-item");

//classList - array of classes


document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector(".trulia-nav-toggle").addEventListener('click', function(e){
    e.preventDefault();

    let truliaNav = document.querySelectorAll(".trulia-nav ul");
    console.log(document.querySelector('.trulia-featured-grid-item').classList);
    for(i=0; i<truliaNav.length; i++){
      truliaNav[i].classList.toggle("trulia-nav-mobilehide")
    }
  });


// Toggle the navigation


// Loop through all the cards
  for(i=0; i<truliaCards.length; i++){
  // Add a click listener on each card
      truliaCards[i].addEventListener('click', function(e){

     // Remove the featured class
     for(cards=0; cards<truliaCards.length; cards++){
       truliaCards[cards].classList.remove("trulia-featured-grid-item");
     }

      // Add the featured class on the one clicked on
      this.classList.add("trulia-featured-grid-item");
    });
    }

  });  



