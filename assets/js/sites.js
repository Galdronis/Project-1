var thankYouText = document.querySelector("#submittedButton")
var theSubmitButton = document.querySelector("#theSubmitButton")




function contactMeForm(event) {
  event.preventDefault();

  var firstName = document.querySelector("#firstName").value;
  var lastName = document.querySelector("#lastName").value;
  var email = document.querySelector("#email").value;
  if (!firstName || !lastName || !email) {
    
    var thankYouP = document.createElement("p");
    thankYouP.textContent = "Please make sure you enter your information in all fields so I can contact you."
    thankYouText.append(thankYouP)
  } else {
    
    var thankYouP = document.createElement("p");
    thankYouP.textContent = "Thank you, " + firstName + " " + lastName + ". I will contact you at " + email + " soon."
    thankYouText.append(thankYouP)
  }

}




theSubmitButton.addEventListener("click", contactMeForm);