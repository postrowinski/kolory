const colors = ['purple', 'yellow', 'red', 'blue', 'orange'];
const app = new Vue({
    el: '#app',
    data: () => ({
        time: null,
        activeColor: '#ffffff',
        currentInterval: null,
        buttons: [
          { time: 5 },
          { time: 10 },
          { time: 15 },
          { time: 20 },
          { time: 25 },
          { time: 30 },
        ]
    }),
    methods: {
      resetTime: function() {
        this.time = null;
        this.activeColor = '#ffffff';
        clearInterval(this.currentInterval);
      },
      setTime: function(time) {
        this.time = time;
        this.changeColor(time);
      },
      changeColor: function(time) {
        if (time) {
          this.pickColor();
          this.currentInterval = setInterval(() => this.pickColor(), time * 1000);
        }
      },
      pickColor: function() {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        if (this.activeColor === newColor) {
          return this.pickColor();
        }
        this.activeColor = newColor;
      }
    }
});