new Vue({
  el:'#vue-app2',
  data: {
    age: 0,
    name: ''
  },
  methods: {
    keyName: function() {
      console.log('Name: ' + this.name);
    },
    keyAge: function() {
      console.log('Age: ' + this.age);
    }
  }
});
