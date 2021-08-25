/*
To do:
Find a color scheme, possibly: https://coolors.co/06aed5-086788-ffffff-62c370-090c08
Figure out the layout
Make the website look good for all screen sizes
Make Friends button only visible when the user is logged in
Make other buttons not move when one is hovered over
Add a back to index.html button for each page
Add turbolinks?
Make it so that there's an "add account" button instead of automatically adding more inputs when the password input is clicked on when on the sign up page

Set up a VM

Example user page URL (hopefully): introcard.com/jaxatax
*/

/*
var passwordInputClicked = false;
function onPasswordInputClick() {
  if (!passwordInputClicked) {
    makeNewInput();
    passwordInputClicked = true;
  }
}
*/

function makeNewInput() {
  var formdiv = document.getElementById("formdiv");
  
  // creates 2 break lines and adds them to formDiv
  var br = document.createElement("br");
  formdiv.appendChild(br);
  br = document.createElement("br");
  formdiv.appendChild(br);
  
  var accountType = document.createElement("INPUT");
  accountType.placeholder = "Account Service";
  // adds the fadeIn class to the accountType classList
  accountType.classList.add("fadeIn");
  formdiv.appendChild(accountType);

  br = document.createElement("br");
  formdiv.appendChild(br);

  var accountInfo = document.createElement("INPUT");
  accountInfo.clickedOn = false;
  accountInfo.onfocus = function() {
    if (!accountInfo.clickedOn) {
      makeNewInput();
      accountInfo.clickedOn = true;
    }
  };
  accountInfo.placeholder = "Account Username";
  // adds the fadeIn class to the accountInfo classList
  accountInfo.classList.add("fadeIn");
  formdiv.appendChild(accountInfo);
}

// function to open the modal
function openHelpModal() {
  document.getElementById("helpmodal").style.display = "block";
}

function closeHelpModal() {
  document.getElementById("helpmodal").style.display = "none";
}