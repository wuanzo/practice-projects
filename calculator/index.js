//
const display = document.getElementById("display");
let errorState = false;

function appendToDisplay(input){
    display.value += input;
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay(){
    display.value = "";
    errorState = false;
}

function calculate(){
    if(errorState) {
        display.value = "Error";
        return;
    }

    try{
        display.value = eval(display.value);  // eval() is like an in-built calculator
                                              // not recommended for security reasons
    }
    catch(error) {
        display.value = "Error";
        errorState = true;
    }
}

window.onload = clearDisplay();
//