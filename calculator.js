let decimal = false;
let resultCalculated = false;
let operandUsed = false;

function insertDecimal(p_nummer) {
    if (resultCalculated == true) {
        document.getElementById("display").innerHTML = '';
        resultCalculated = false;
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + p_nummer;
    } else {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + p_nummer;
    }
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "";
    decimalReset()
    resultCalculated = false;
    operandUsed = false;
}

function calculateResult() {
    document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
    resultCalculated = true;
}

function addDecimal() {
    if (decimal == false) {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + '.';
        decimal = true;
        operandUsed = false;
    }
    else {

    }
}

function decimalReset() {
    decimal = false;
}

function negateDisplay() {
    document.getElementById("display").innerHTML = '-' + document.getElementById("display").innerHTML
    resultCalculated = false;
    operandUsed = false;
}

function setOperandUsed() {
    operandUsed = true;
}

function operandReset() {
    operandUsed = false;
}

function insertOperand(p_operand) {
        if (operandUsed == true) {
        } else {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + p_operand;
            operandUsed = true;
        }
}
