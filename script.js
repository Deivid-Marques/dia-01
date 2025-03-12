alert('Por Favor:\nDigite somente números!') 


function somarinputs(){
const tn1 = document.querySelector('#txtn1')
const tn2 = document.querySelector('#txtn2')
const res = document.querySelector('.res')
const n1 = Number(tn1.value)
const n2 = Number(tn2.value)
const operacao = document.querySelector('#operadores').value;
let resultado;

if (operacao === 'soma'){
    resultado = n1 + n2
    res.innerHTML = `O resultado da soma é ${resultado}`
}
else if (operacao === 'subtração') {
    resultado = n1 - n2;
    res.innerHTML = `O resultado da subtração é ${resultado}`;
}

else if (operacao === 'multiplicação'){
    resultado = n1 * n2
    res.innerHTML = `O resultado da soma é ${resultado}`
}

else if (operacao === 'divisão'){
    resultado = n1 / n2
    res.innerHTML = `O resultado da soma é ${resultado}`
}

}

