// open the registration forms
// Get the modal (Eng)
var modal = document.getElementById("myForm");

// Get the button that opens the modal
var btn = document.getElementById("myButton");
var btn1 = document.getElementById("myButton1");
var btn2 = document.getElementById("myButton2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}
btn1.onclick = function() {
modal.style.display = "block";
}
btn2.onclick = function() {
modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}


////////////////////////////////////////////////////////////

// Get the modal (Viet)
var modal_viet = document.getElementById("myForm_viet");

// Get the button that opens the modal
var btn_viet = document.getElementById("myButton_viet");
var btn_viet1 = document.getElementById("myButton_viet1");
var btn_viet2 = document.getElementById("myButton_viet2");

// Get the <span> element that closes the modal
var span_viet = document.getElementsByClassName("close_viet")[0];

// When the user clicks the button, open the modal 
btn_viet.onclick = function() {
modal_viet.style.display = "block";
}
btn_viet1.onclick = function() {
modal_viet.style.display = "block";
}
btn_viet2.onclick = function() {
modal_viet.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_viet.onclick = function() {
modal_viet.style.display = "none";
}