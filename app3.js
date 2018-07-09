new Vue({
  el: '#vue-app3',
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
    // ageWithA: function() {
    //   console.log('in function A');
    //   return this.age + this.a;
    // },
    // ageWithB: function() {
    //   console.log('in function B');
    //   return this.age + this.b;
    // },
    // nothing: function() {
    //   console.log('in nothing' + this.age);
    // }
  },
  computed: {
    ageWithA: function() {
      console.log('in function A');
      return this.age + this.a;
    },
    ageWithB: function() {
      console.log('in function B');
      return this.age + this.b;
    },
    nothing: function() {
      console.log('in nothing' + this.age);
    }
  }
})
