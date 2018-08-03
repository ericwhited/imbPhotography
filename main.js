// After three seconds the email div pops up.
//change display to block to bring modal back
setTimeout(function() {
	document.querySelector('.modal').style = 'display: none;'}, 
	1000);



// allows the window to be closed with the X button
document.querySelector('#Xbutton').onclick = function() {
	document.querySelector('.modal').style = 'display: none'
};

// allows submit button to close the window
document.querySelector('#submit').onclick = function() {
	document.querySelector('.modal').style = 'display: none'
};


























// function hi() {
// 	document.querySelector('.modal').style.display = 'block'
// }


// document.querySelector('.modal').style.display = 'block'


// document.querySelector('#X').onClick = function {


// }
// document.querySelector(".modal").style.display = "none";