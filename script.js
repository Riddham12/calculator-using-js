function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
        // alert("Your output is: " + result);     
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
