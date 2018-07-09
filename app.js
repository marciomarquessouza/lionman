new Vue({
  el:'#vue-app',
  data: {
    name: 'Shaun - the sheep',
    job: 'dev and anything what I want to do',
    website: 'https://www.uol.com.br',
    websiteTag: '<a href="https://9gag.com/nsfw">Tadeu</a>',
    age: 35,
    x: 0,
    y: 0
  },
  methods: {
    greet: function() {
      return 'Good ' + time + " " + this.name;
    },
    addYear: function(year) {
      this.age += year;
    },
    subtractYear: function(year) {
      this.age -= year;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
      console.log('x: ' + event.offsetX);
      console.log('y: ' + event.offsetY);
    }
  }
})
