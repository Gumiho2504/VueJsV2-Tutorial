new Vue({
    el: '#app',
    data: {
        a : "",
        b : "",
        age : 25
    },
    methods: {
       addNumA : function(){
        console.log('This is menthod of addNumA')
        return this.a + this.age;
       },
       addNumB : function(){
        console.log('This is menthod of addNumB')
        return this.b + this.age;
       }
    }
})