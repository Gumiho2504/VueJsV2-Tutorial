var vueApp1 = new Vue({
    el: '#vue-app1',
    data: {
       message1: 'This is massage for vue app 1'
    },
    
    methods: {
       showMassage1: function(){
            return alert('Massage from app 1');
       }
    }
});
var vueApp2 = new Vue({
    el: '#vue-app2',
    data:{
        message2: 'This is massage for vue app 2'
    },
    methods:{
        showMassage2: function(){
            return alert('Massage from app 2');
       }
    },
    computed:{}
});
var vueApp3 = new Vue({
    el: '#vue-app3',
    data:{
        message3: 'This is massage for vue app 3'
    },
    methods:{
        showMassage3: function(){
            return alert('Massage from app 3');
       }
    },
    computed:{}
});