
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic

     if (a > b){
       comparison = ">";
     } else if (a == b){
       comparison = "="
     } else comparison ="N/A";


    // example: 
    //if (a ==b && comparison == "moo" || comparison == ""){
    //   comparison ="cow"
    // }

 
     document.querySelector('#comparison').innerText = comparison;
   };
 