/*  
    Item a:
        O erro que está sendo gerado provém de um erro lógico na comparação do comando if.
        Porque a condição está comparando dois objetos compostos em vez de 2 valores primitivos (String é um exemplo 
        de valor primitivo).

        Código correto:
*/
        function greet(person){
            if (person.name == 'amy'){
                return 'hello amy';
            }else{
                return 'hello arnold';
            }
        }

        greet({name: 'amy'});

/*
    Item b:
        Dado o código, o erro gerado por ele é o seguinte: fido.bark não é uma função.
        Pois para usar o formalismo descrito no problema, será necessário que a função forneça algum tipo de retorno.

        Codigo correto:
*/
        function Dog(name){
            this.name = name;
        }
        
        Dog.prototype.bark = function(){
            console.log(this.name + ' woof');
            return 'woof';
        }
        let fido = new Dog('fido');
        fido.bark();

        // Outra forma
        class Dog{
            constructor(name){
                this.name = name;
            }
            
            bark(){
                console.log(this.name + ' woof');
            }
        }
        let fido = new Dog('fido');
        fido.bark();

/*
    Item c:
        O Javascript é uma linguagem assíncrona. As Promises servem para informar se uma operação
        assíncrona obteve sucesso ou falha. Caso seja bem-sucedido retorna o resultado da funçao de sucesso, caso contrário
        retorna o resulutado da função de falha. 

        As duas formas de se usar o Promise são:
*/
        // 1ª Forma
        const promise = doSomething();
        promise.then(sucessCallback, failureCallback);

        // 2ª Forma
        doSomething().then(sucessCallback, failureCallback);

/*      Para resolver um array de Promises, usa-se uma função chamado Promise.all(vetor). Esta função
        possui como um parâmetro um array de 'promises', e caso todas as promises obtêm um resultado bem-sucedido,
        o resultado final é um array dos resultados dessas promises.

        Exemplo:
*/
        const asyncFunctions = [
            function1,
            function2,
            function3,
        ];

        const results = await Promisse.all(asyncFunctions);
/*
        Referências: 
            https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Usando_promises
            https://dev.to/afifsohaiii/dealing-with-promises-in-an-array-with-async-await-5d7g
*/