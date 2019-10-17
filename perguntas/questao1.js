var app = new Vue({
    el: '#primo',
    data: {
        message: ''
    }
});

var app = new Vue({
    el: '#balanced',
    data: {
        balancedMessage: '',    
        str: '',
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
        },
    }
});


var app3 = new Vue({
    el: '#fibo',
    data: {
        value: null,
        fiboMessage: '',
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
        }
    }
});