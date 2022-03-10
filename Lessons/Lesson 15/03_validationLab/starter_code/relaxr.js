function validateSignInForm(e){
    e.preventDefault();

    // Set up message array
    let messages = new Array;

    // Get password and validate
   var thePassword = document.querySelector("#inputPassword3").value;

   if(thePassword.length <= 3){
    messages.push("The password is too short");

}

    // Get email address and validate
    var theEmail = document.querySelector("#inputEmail3").value;

    if(!ValidateEmail(theEmail)){
        messages.push("Incorrect Email");
    }

    // If no error messages show submit message
    let outputMessage = "";
    if(messages.length == 0){
        outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
    }else{
    // Else show error messages
        outputMessage = '<div class="alert alert-danger" role="alert">';
        for(let i=0;i<messages.length;i++){
            outputMessage+='<p>'+messages[i]+"</p>";
        }
        outputMessage+="</div>";
    }

    document.getElementById('errorMessages').innerHTML = outputMessage;

}

function validateNewUserForm(e){
    e.preventDefault();

     // Set up message array
     let messages = new Array;

    // Get email address and validate
    var theEmail = document.querySelector("#inputEmail").value;

    if(!ValidateEmail(theEmail)){
        messages.push("Incorrect Email");
    }
    // Get passwords and validate
    const thePW1 = document.querySelector("#inputPassword5").value;
    const thePW2 = document.querySelector("#inputPassword4").value;

        // Make sure that both passwords match
        if(thePassword.length <= 3 || thePW2.length <=3){
            messages.push("The password is too short");
        }
        if(thePW1 !== thePW2){
            messages.push("Invalid Password");

        }
        
    // Validate Names

    const inputFName = document.querySelector("#inputFName").value;
    const inputLName = document.querySelector("#inputLName").value;

    if(inputFName.length <=3){
        messages.push("First name is invalid");
    }

    if(inputLName.length <=3){
        messages.push("Last name is invalid");
    }


     // If no error messages show submit message
     let outputMessage = "";
     if(messages.length == 0){
         outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
     }else{
     // Else show error messages
         outputMessage = '<div class="alert alert-danger" role="alert">';
         for(let i=0;i<messages.length;i++){
             outputMessage+='<p>'+messages[i]+"</p>";
         }
         outputMessage+="</div>";
     }
 
     document.getElementById('errorMessages').innerHTML = outputMessage;
}




function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }else{
    return false;
  }
}




document.addEventListener('DOMContentLoaded', function(event) {

    jQuery('#relaxrExistingUser a').click(function (e) {
        e.preventDefault()
        jQuery(this).tab('show')
    });

    // Bind a validation function to the submit of the login form
    document.querySelector("#home .relaxrLoginForm").addEventListener('submit',validateSignInForm);

    // Bind a validation function to the submit of the profile

    document.querySelector("#profile .relaxrLoginForm").addEventListener('submit', validateNewUserForm)
});