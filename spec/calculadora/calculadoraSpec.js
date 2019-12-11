describe("Suite de teste de adição", function(){
    var Calculadora = require('../../src/js/calculadora')

    it("Testar a soma de um numero com outro numero", function(){
        expect(Calculadora.adicionar(2,3)).toEqual(5)
    })

    it("Testar a soma de um text com outro texto", function(){
        expect(Calculadora.adicionar('5','-3')).toEqual(2)
    })

    it("Testar a soma de um float com inteiro", function(){
        expect(Calculadora.adicionar(5,3.5)).toEqual(8.5)
    })

    it("Testar a soma de um float com undefined", function(){
        expect(Calculadora.adicionar(5,undefined)).toEqual(0)
    })

    it("Testar a soma de um undenined com int", function(){
        expect(Calculadora.adicionar(5,undefined)).toEqual(0)
    })

    it("Testar a subtracao de um numero com outro numero", function(){
        expect(Calculadora.subtrair(8,3)).toEqual(5)
    })

    it("Testar a subtrair de um text com outro texto", function(){
        expect(Calculadora.subtrair('5','-3')).toEqual(8)
    })

    it("Testar a subtrair de um float com inteiro", function(){
        expect(Calculadora.subtrair(5,3.5)).toEqual(1.5)
    })

    it("Testar a subtrair de um float com undefined", function(){
        expect(Calculadora.subtrair(5,undefined)).toEqual(0)
    })

    it("Testar a subtrair de um undenined com int", function(){
        expect(Calculadora.subtrair(undefined,4)).toEqual(0)
    })


    it("Testar a multiplicar de um numero com outro numero", function(){
        expect(Calculadora.multiplicar(2,3)).toEqual(6)
    })

    it("Testar a multiplicar de um text com outro texto", function(){
        expect(Calculadora.multiplicar('5','-3')).toEqual(-15)
    })

    it("Testar a multiplicar de um float com inteiro", function(){
        expect(Calculadora.multiplicar(5,1.5)).toEqual(7.5)
    })

    it("Testar a multiplicar de um float com undefined", function(){
        expect(Calculadora.multiplicar(5,undefined)).toEqual(0)
    })

    it("Testar a multiplicar de um undenined com int", function(){
        expect(Calculadora.multiplicar(undefined, 5)).toEqual(0)
    })

    it("Testar a dividir de um numero com outro numero", function(){
        expect(Calculadora.dividir(9,3)).toEqual(3)
    })

    it("Testar a dividir de um text com outro texto", function(){
        expect(Calculadora.dividir('15','-3')).toEqual(-5)
    })

    it("Testar a dividir de um float com inteiro", function(){
        expect(Calculadora.dividir(3,1.5)).toEqual(2)
    })

    it("Testar a dividir de um float com undefined", function(){
        expect(Calculadora.dividir(5,undefined)).toEqual(0)
    })

    it("Testar a dividir de um undenined com int", function(){
        expect(Calculadora.dividir(undefined, 5)).toEqual(0)
    })
    
    it("Testar a dividir de um segundo numero 0", function(){
        expect(Calculadora.dividir(10, 0)).toEqual('Erro')
    })
})