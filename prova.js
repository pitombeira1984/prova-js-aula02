// ---Prova Aula 02 JavaScript---

var nome = prompt("Digite seu nome:")

var h = prompt("Digite sua altura:")

var p = prompt("Digite seu peso")

var imc = p/(h**2)

if (imc < 16){
    console.log(` ${nome}, seu IMC é ${imc}, então Baixo Peso - Muito Grave `)
}
else if(imc >= 16 && imc <= 16.99){
    console.log(` ${nome}, seu IMC é ${imc}, então Baixo Peso - Grave `)
}
else if(imc >= 17 && imc <= 18.49){
    console.log(` ${nome}, seu IMC é ${imc}, então Baixo Peso `)
}
else if(imc >= 18.5 && imc <= 24.99){
    console.log(` ${nome}, seu IMC é ${imc}, então Peso Normal `)
}
else if(imc >= 25 && imc <= 29.99){
    console.log(` ${nome}, seu IMC é ${imc}, então Sobrepeso `)
}
else if(imc >= 30 && imc <= 34.99){
    console.log(` ${nome}, seu IMC é ${imc}, então Obesidade Grau 1 `)
}
else if(imc >= 35 && imc <= 39.99){
    console.log(` ${nome}, seu IMC é ${imc}, então Obesidade Grau 2 `)
}
else if (imc >= 40){
    console.log(` ${nome}, seu IMC é ${imc}, então Obesidade Grau 3 `)
}
else{
    console.log("Fora dos Parametros")
}
    
