var displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").innerText = displayValue;
}

function calculate() {
    try {
        var result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById("display").innerText = displayValue;
    } catch (error) {
        displayValue = "Erro";
        document.getElementById("display").innerText = displayValue;
    }
}