var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var inputValue = document.getElementById("inputValue");
var startValue = (inputValue.value = 0);
var cartValue = document.getElementById("cartValue");
var minusAudio = new Audio("https://alexanderazuka.com/sounds/cart-minus.wav");
var plusAudio = new Audio("https://alexanderazuka.com/sounds/cart-plus.wav");

// Listen for when buttons are clicked
minus.addEventListener("click", subtract);
plus.addEventListener("click", add);

// Check when value is inputted
inputValue.onkeyup = function() {
    cartValue.innerHTML = inputValue.value;
    cartValue.style.display = "block";
    if (inputValue.value < 1) {
        cartValue.style.display = "none";
    }
};
// Subtracts 1 When Minus Button is Clicked
function subtract() {
    minusAudio.play();
    var subtracted = --inputValue.value;
    cartValue.style.display = "block";
    inputValue.value = subtracted;
    cartValue.innerHTML = subtracted;
    if (subtracted < 1) {
        cartValue.style.display = "none";
    }
}

// Adds 1 When Plus Button is Clicked
function add() {
    plusAudio.play();
    var added = ++inputValue.value;
    cartValue.style.display = "block";
    inputValue.value = added;
    cartValue.innerHTML = added;
    if (added < 1) {
        cartValue.style.display = "none";
    }
}