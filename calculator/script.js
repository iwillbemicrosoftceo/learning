// Calculator JS

const display = document.getElementById('display');
const body = document.getElementById("body")

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = '';
        alert(error.message);
    }
    
}
function change(mode) {
    if (mode == "light") body.style.backgroundColor = "#fff"
    else if (mode == "dark") body.style.backgroundColor = "#000"
}
function copyDisplay() {
    // Get the text field
  
    // Select the text field
    display.select();
    display.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(display.value);
  
    // Alert the copied text
    alert("Copied the text: " + display.value);
  }