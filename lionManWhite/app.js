new Vue({
  el:'#vue-app',
  data: {
    name: 'Marcio',
    job: 'Everything',
    website: 'http://www.uol.com.br',
    websiteTag: '<a href="https://9gag.com/nsfw">Julieta</a>',
    age: 35,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    success: false,
    error: false,
    comics: ['Sandman','Maus','O Garoto Chinês','I am a Hero'],
    comicsRanked:[
      {name: 'Sandman', stars: 4},
      {name: 'Maus', stars: 5},
      {name: 'O Garoto Chinês', stars: 5},
      {name: 'I am a Hero', stars: 5}
    ]
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    },
    addAge: function(year) {
      this.age += year;
    },
    subtractAge: function(year) {
      this.age -= year;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    keyName: function() {
      console.log('Mary Anne writing a name')
    },
    keyAge: function() {
      console.log('Mary Anne writing a age')
    },
    eventName: function(){
      console.log('Your name: ' + this.name);
    },
    eventAge: function(){
      console.log("Your age: " + this.age);
    },
    // ageWithA: function(){
    //   console.log('in A');
    //   return this.age + this.a;
    // },
    // ageWithB: function(){
    //   console.log('in B');
    //   return this.age + this.b;
    // }
  },
  computed: {
    ageWithA: function(){
      console.log('in A');
      return this.age + this.a;
    },
    ageWithB: function(){
      console.log('in B');
      return this.age + this.b;
    },
    compClass: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})
