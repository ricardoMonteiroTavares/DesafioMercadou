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
