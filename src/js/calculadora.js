var Calculadora = {
    ADICAO:'+',
    SUBTRACAO: '-',
    DIVISAO: '/',
    MULTIPLICACAO:'*',
    adicionar : function (num1 , num2){
        return Calculadora.calcular(num1, num2, Calculadora.ADICAO)
    },
    subtrair: function (num1 , num2){
        return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO)
    },
    multiplicar: function (num1 , num2){
        return Calculadora.calcular(num1, num2, Calculadora.MULTIPLICACAO)
    },
    dividir: function (num1 , num2){
        if(num2 == 0 || num2 =='0'){
            return 'Erro'
        }
        return Calculadora.calcular(num1, num2, Calculadora.DIVISAO)
    },

    calcular: function(num1, num2, operacao){
        if(num1 == undefined || num2 == undefined){
            return 0
        }

        num1 = parseFloat(num1)
        num2 = parseFloat(num2)

        switch(operacao){
            case Calculadora.ADICAO:
                return num1 + num2;
                break;
            case Calculadora.SUBTRACAO:
                return num1 - num2;
                break;
            case Calculadora.MULTIPLICACAO:
                return num1 * num2;
                break;
            case Calculadora.DIVISAO:
                return num1 / num2;
                break;
        }
    }
}

module.exports = Calculadora

