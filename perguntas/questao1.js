var app = new Vue({
    el: '#primo',
    data: {
        value: null,
        primeMessage: '',
        show: false,
    },
    methods: {
        primeNumbers: function(){
            var num = parseInt(this.value);
            if(num > 0){
                var seq = [];
                var i = num - 1;
                while(i >= 1){
                    if(((num % i) == 0) && (i != 1)){
                        num --;
                        i = num - 1;
                    }else if(i == 1){
                        seq.splice(0,0,num);
                        num --;
                        i = num - 1;
                    }else{
                        i--;
                    }
                }
                this.primeMessage = seq.toString();
            }else{
                this.primeMessage = 'Erro: O valor somente pode ser apenas um número inteiro positivo, exceto 0!';
            }
            this.show = true;
        }
    }
});

var app = new Vue({
    el: '#balanced',
    data: {
        balancedMessage: '',    
        str: '',
        show: false,
    },
    methods: {
        isBalanced: function () {
            var cond = 'Balanceado';
            var stack = [];
            var c;
            var top;
            for (var i = 0; i < this.str.length ; i++){
                c = this.str.charAt(i);
                if((c == '\{') || (c == '\(') || (c == '\[')){
                    stack.push(c);
                }else if ((c == '\}') || (c == '\)') || (c == '\]')){
                    top = stack[stack.length-1];

                    if((c == '\}') && (top == '\{')){
                        stack.pop();
                    }else if ((c == '\)') && (top == '\(')){
                        stack.pop();
                    }else if((c == '\]') && (top == '\[')){
                        stack.pop();
                    }else{
                        cond = 'Desbalanceado';
                        break;
                    }
                }
            }
            if((cond == 'Balanceado') && stack.length != 0){
                cond = 'Desbalanceado';
            }
            this.balancedMessage = cond;
            this.show = true;
        },
    }
});


var app3 = new Vue({
    el: '#fibo',
    data: {
        value: null,
        fiboMessage: '',
        show: false,
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

            this.fiboMessage = seq.toString();
            this.show = true;
        }
    }
});