var app = new Vue({
    el: '#prime',
    data: {
        value: null,            // Variável que irá receber o valor do input
        primeMessage: '',       // Resultado inicial
        show: false,            // Variável que mostrará o componente do html se o resultado inicial (primeMessage) for diferente de vazio
    },
    methods: {
        // Função que gera a sequência de números primos
        primeNumbers: function(){            
            var num = parseInt(this.value);                 // Tenta converter o valor em inteiro e quarda em um contador regressivo
            
            // Se o número foi convertido com sucesso, segue com o algoritmo. Caso contrário
            // é armazenado a mensagem de erro e mostra para o usuário.
            if(num === this.value){
            
                // Se for o número maior do que 0, começa a gerar a sequência de números primos, caso contrário 
                // é armazenado a mensagem de erro e mostra para o usuário.
                if(num > 0){
                    var seq = '';                           // Inicializa a sequência
                    var flag = false;                       // Bandeira de verificação se o número é maior do que 2.
                    
                    // Verifico se o número informado é maior do que 2?
                    //      Caso verdadeiro: Marca-se a Bandeira(flag) para inserir o valor 2 na sequência mais tarde
                    //      Motivo: Pois o algorítmo não verifica todos casos onde num é par.
                    if(num >= 2){
                        flag = true;                        // Marca-se a Bandeira(flag)
                    }

                    // O número informado é par?
                    //   Se sim: decremento num, pois todo número par não é primo exceto o valor 2
                    if((num % 2) == 0){
                        num--;
                    }
                    var i = num - 2;                        // Cria e inicializa o 2º contador regressivo

                    // Para cada número maior ou igual a 1 do contador regressivo i, faça:
                    while(i >= 1){

                        // O resto da divisão de num com i é zero e o divisor(i) é diferente de 1? Neste caso, o número 1 é divisor univseral
                        if(((num % i) == 0) && (i != 1)){
                            // Significa que o numero do contador regressivo num não é primo, portanto:
                            num -= 2;               // num é decrementado para o próximo número ímpar
                            i = num - 2;            // e o contdor regressivo i é reiniciado

                        // O valor de i é o divisor universal?
                        }else if(i == 1){
                            // Em sendo o divisor universal, significa que o numero armazenado em num
                            // é primo, portanto:
                            seq = num.toString() + ', ' + seq;          // O valor de num é inserido no início da sequência
                            num -= 2;                                   // num é decrementado para o próximo número ímpar
                            i = num - 2;                                // e o contador regressivo i é reiniciado
                        }else{
                            // Caso não seja nenhum dos dois, decrementa-se o valor do contador regressivo i para o próximo número ímpar
                            i -= 2;
                        }
                    }
                    // Aqui verifica-se o valor da flag, para poder inserir o valor 2 em caso afirmativo
                    if(flag){
                        seq = '2, ' + seq;          // O valor de 2 é inserido no início da sequência
                    }
                    // Após o término da execução, a sequência gerada é repassada para a primeMessage sem a vírgula no final
                    this.primeMessage = seq.slice(0,(seq.length-2));
                }else{
                    this.primeMessage = 'Erro: O valor somente pode ser apenas um número inteiro positivo, exceto 0!';
                }
            }else{
                this.primeMessage = 'Erro: O valor somente pode ser apenas um número inteiro positivo, exceto 0!';
            }
            // Mostra a mensagem na tela
            this.show = true;
        }
    }
});

var app = new Vue({
    el: '#balanced',
    data: {
        str: '',                    // Variável que irá receber o valor do input
        balancedMessage: '',        // Resultado inicial
        show: false,                // Variável que mostrará o componente do html se o resultado inicial (balancedMessage) for diferente de vazio
    },
    methods: {
        isBalanced: function () {
            var cond = 'Balanceado';        // Condição de início. Assumo que a string inicial seja balanceada
            var stack = [];                 // Inicia a pilha
            var top;                        // Variável que armazenará o valor do topo da pilha
            var c;                          // Variável responsável por armazenar apenas um caractere
            
            // Enquanto existirem caractéres a serem avaliados na entrada, faça:
            for (var i = 0; i < this.str.length ; i++){
                c = this.str.charAt(i);                                 // Captura o caractere

                // Verifica-se o caractere pertence a algum destes caracteres descritos abaixo
                // Se c for {, ( ou [ : Adiciona-se o caractere na pilha 
                if((c == '\{') || (c == '\(') || (c == '\[')){
                    stack.push(c);

                // Se c for }, ) ou ] : Verfica-se o valor do topo da pilha
                }else if ((c == '\}') || (c == '\)') || (c == '\]')){
                    top = stack[stack.length-1];                // Captura o valor do topo da pilha

                    // Se o caractere de topo de pilha for uma abertura de chaves, colchetes ou parenteses
                    // e o caractere c for um fechamento dos mesmos símbolos: Remove-se o elemento contido no topo da pilha.
                    if( ((c == '\}') && (top == '\{')) ||
                        ((c == '\)') && (top == '\(')) ||
                        ((c == '\]') && (top == '\['))
                    ){
                        stack.pop();
                    
                    // Se não for um fechamento correto. Exemplo: ( ] : Iterrompe o loop e retorna o valor Desbalanceado    
                    }else{
                        cond = 'Desbalanceado';
                        break;
                    }
                }
            }

            // Se chegou ao fim do algoritmo, verifica-se a pilha está vazia e a condição final seja Balanceado.
            // Pois pode ocorrer casos onde a entrada seja um valor deste tipo ()] 
            if((cond == 'Balanceado') && stack.length != 0){
                cond = 'Desbalanceado';
            }

            // Após o término da execução, o resultado gerado é repassado 
            // para balancedMessage e mostra o resultado na tela
            this.balancedMessage = cond;
            this.show = true;
        },
    }
});


var app3 = new Vue({
    el: '#fibo',
    data: {
        value: null,            // Variável que irá receber o valor do input
        fiboMessage: '',        // Resultado inicial
        show: false,            // Variável que mostrará o componente do html se o resultado inicial (fiboMessage) for diferente de vazio
    },

    methods: {
        // Função que gera a sequência de fibonacci
        fibonacci: function(){
            const num = parseInt(this.value);                   // Tenta converter o valor em inteiro
            var seq;                                            // Cria a variável local para armazenar a sequência de fibonacci
            
            // Se o número foi convertido com sucesso, segue com o algoritmo. Caso contrário
            // é armazenado a mensagem de erro e mostra para o usuário.
            if(num === this.value){   
                // Se o número passado pelo input for maior do que 2, faz o processo de 
                // interação da sequência de fibonacci, caso contrário retorna um valor 
                // padrão ou Erro caso não seja possível fazer o parse.
                if (num >= 2){
                    seq = [0,1,1];                                  // Inicia a sequência

                    // Bloco de código responsável por verificar se o próximo número
                    // da sequência de fibonacci é menor ou igual ao numero repassado pelo usuário.
                    // Caso afirmativo: Insere na sequência, caso falso: para a inserção
                    var a = seq[seq.length-2] + seq[seq.length-1];  
                    while(a <= num){
                        seq.push(a);
                        a = seq[seq.length-2] + seq[seq.length-1];
                    }
                }else if(num == 1){
                    seq = [0,1,1];
                }else if(num == 0){
                    seq = [0];
                }else {
                    seq = 'Erro: O valor somente pode ser apenas um número inteiro positivo!';
                }
            }else{
                seq = 'Erro: O valor somente pode ser apenas um número inteiro positivo!';
            }
            // Após o término da execução, a sequência gerada é repassada 
            // para fiboMessage e mostra o resultado na tela
            this.fiboMessage = this.toString(seq);
            this.show = true;
        },


        // Função especial que converte um array de inteiros em uma string
        toString: function(array){
            seq = '';
            for(var i in array){
                seq = seq + ', ' + array[i].toString();
            }
            return seq.slice(1,(seq.length));
        }
    }
});