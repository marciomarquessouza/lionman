new Vue({
  el:'#vue-app4',
  data: {
    available: false,
    nearby: false
  },
  methods: {

  },
  computed: {
    compClass: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})
