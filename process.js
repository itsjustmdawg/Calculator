// Clear display panel
function clearScreen(){
    document.getElementById('result').value = '';
}

// Display value inputted on display panel
function display(value){
    document.getElementById('result').value += value;
}


// Evaluate the equation
function calculate(){
    var x = document.getElementById('result').value;
    var y = eval(x);
    document.getElementById('result').value = y;
}