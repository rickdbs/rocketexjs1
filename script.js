/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [x]  A soma dos dois números;
- [x]  A subtração dos dois números;
- [x]  A multiplicação dos dois números;
- [x]  A divisão dos dois números;
- [x]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

let n1 = prompt("Digite o primeiro número: ")
let n2 = prompt("Digite o segundo número: ")

let sum = Number(n1) + Number(n2)
let sub = Number(n1) - Number(n2)
let multi = Number(n1) * Number(n2)
let div = Number(n1) / Number(n2)
let rdiv = Number(n1) % Number(n2)

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${multi}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${rdiv}`)

if(sum % 2 == 0) {
 alert("A soma dos dois números é par: " + sum)
} else{
    alert("A soma dos dois números é ímpar: " + sum)
}

if(n1 == n2){
    alert(`Os números inseridos são iguais!`)
} else{
    alert(`Os números inseridos são diferentes!`)
}
