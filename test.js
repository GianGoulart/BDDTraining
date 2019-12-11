const readline = require('readline');
const calc = require('./src/js/calculadora')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escreva a operação? ', (answer) => {
    var split = answer.split(" ")
    
    switch(split[1]){
        case '+':
            return console.log('resultado:',calc.adicionar(split[0], split[2]));
            rl.close();
        case '-':
            return console.log('resultado:',calc.subtrair(split[0], split[2]));
            rl.close();
        case '/':
            return console.log('resultado:',calc.dividir(split[0], split[2]));
            rl.close();
        case '*':
            return console.log('resultado:',calc.multiplicar(split[0], split[2]));
            rl.close();
        default :
            return console.log('Thank you for your valuable feedback:','Operação incorreta');

    }
});