/*
Changes Javascript Depening on what the view width and height is
Which is how this is changing formating for phones and computers
*/
if(window.innerHeight<=window.innerWidth){
	document.getElementById("CSS").href= "css/JadenCSS.css";
}


/*
Popup alerting user that email has been sent
*/
document.getElementById("SubmitButton").onclick = function(){alert('Your Inquiry/Question/Comment Has Been Emailed To Jaden')};