if(window.innerHeight<window.innerWidth){
	document.getElementById("pageSizeBox").style.height= window.innerHeight*3.5;
	document.getElementById("pageContentBox").style.width= 75%;
	document.getElementById("CommentSubmissionForm").style.height= 70%;
	document.getElementById("SubmitButton").style.height=10%;
}
else{
	document.getElementById("pageSizeBox").style.height= window.innerHeight*1.5;
	document.getElementById("pageContentBox").style.width= 100%;
	document.getElementById("CommentSubmissionForm").style.height= 80%;
	document.getElementById("SubmitButton").style.height=20%;	
}