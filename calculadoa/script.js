let operation = '';

function setOperation(op) {
    operation = op; 
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            document.getElementById('result-add').value = result;
            break;
        case '-':
            result = num1 - num2;
            document.getElementById('result-sub').value = result;
            break;
        case '*':
            result = num1 * num2;
            document.getElementById('result-mul').value = result;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
                document.getElementById('result-div').value = result;
            } else {
                document.getElementById('result-div').value = "Erro: Divisão por zero!";
            }
            break;
        default:
            alert("Selecione uma operação!");
    }
}

function calculateAll() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    document.getElementById('result-add').value = num1 + num2;
    document.getElementById('result-sub').value = num1 - num2;
    document.getElementById('result-mul').value = num1 * num2;
    
    if (num2 !== 0) {
        document.getElementById('result-div').value = num1 / num2;
    } else {
        document.getElementById('result-div').value = "Erro: Divisão por zero!";
    }
}

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result-add').value = '';
    document.getElementById('result-sub').value = '';
    document.getElementById('result-mul').value = '';
    document.getElementById('result-div').value = '';
    operation = ''; 
}