// Created Component
Vue.component('greetting',{
    template: '<p>Hi every one, I am a re-usable component</p>'
})
Vue.component('button-counter',{
    data: function(){
        return{counter : 0}
    },
    template: '<button type="button" @click="counter++">You click me {{counter}} times</button>'
})
var vueApp1 = new Vue({
    el: '#vue-app1',
    data: {
       
    },
    
    methods: {
       
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
