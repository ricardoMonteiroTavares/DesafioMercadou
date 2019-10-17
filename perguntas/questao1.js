var app = new Vue({
    el: '#primo',
    data: {
        message: ''
    }
});

var app2 = new Vue({
    el: '#balanceado',
    data: {
        message: '',
        str: ''
    },
    methods: {
        isBalanceado: function () {
            var condicao = 'Balanceado'
            var pilha = [];
            var c;
            for (var i = 0; i < this.str.length ; i++){
                c = this.str.charAt(i);
                if((c == '\{') || (c == '\(') || (c == '\[')){
                    pilha.push(c);
                }else if ((c == '\}') || (c == '\)') || (c == '\]')){
                    if((c == '\}') && (pilha[pilha.length-1] == '\{')){
                        pilha.pop();
                    }else if ((c == '\)') && (pilha[pilha.length-1] == '\(')){
                        pilha.pop();
                    }else if((c == '\]') && (pilha[pilha.length-1] == '\[')){
                        pilha.pop();
                    }else{
                        condicao = 'Desbalanceado';
                        break;
                    }
                }
            }
    
            this.message = condicao;
        }
    }
});


var app3 = new Vue({
    el: '#fibo',
    data: {
        value: null,
        message: '',
    },

    methods: {
        fibonacci: function(){
            const num = parseInt(this.value);
            var seq;
            if (num >= 2){
                seq = [0,1,1];
                var a = seq[seq.length-2] + seq[seq.length-1];
                while(a <= num){
                    seq.push(a);
                    a = seq[seq.length-2] + seq[seq.length-1];
                }
            }else if(num == 1){
                seq = '0,1,1';
            }else if(num == 0){
                seq = '0';
            }else {
                seq = 'Erro: O valor somente pode ser apenas um número inteiro positivo!'
            }

            this.message = seq.toString();
        }
    }
});