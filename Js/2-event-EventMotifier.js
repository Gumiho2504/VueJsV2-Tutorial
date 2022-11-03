new Vue({
    el: '#app',
    data: {
        age: 25
    },
    methods: {
        add: function(num){
            this.age += num;
        },
        subtrack: function(num){
            this.age -= num;
        },
        greet: function(say){
            alert(say);
        },
        haven: function(){
            alert('តើអ្នកចង់ចូលទៅកាន់ឋានសួគ៏ទេ?');
        }
    }
})