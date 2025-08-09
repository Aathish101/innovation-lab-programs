function addition() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Please enter valid numbers');
        return;
    }
    const result = num1 + num2;
    displayResult(result);
}

function sub() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Please enter valid numbers');
        return;
    }
    const result = num1 - num2;
    displayResult(result);
}

function displayResult(value) {
    document.getElementById('result').textContent = 'Result: ' + value;
}
