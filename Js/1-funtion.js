new Vue({
    el: '#app',
    data: {
        name: 'Hello Gumiho!',
        age: 22,
        website: 'https://www.pornhub.com/'
    },
    methods: {
        greetting : function(text){
            return text +' ' + this.name;
        }
    }
})