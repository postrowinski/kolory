const defaultColors = ['purple', '#ffff5a', 'red', 'blue', '#ff6d00' , 'green', '#d81b60', 'white', 'black']
const app = new Vue({
    el: '#app',
    data: () => ({
        colors: defaultColors,
        time: null,
        selectOptionsButton: true,
        defaultOptions: false,
        manualOptions: false,
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
        this.colors = defaultColors;
        this.selectOptionsButton = true;
        this.time = null;
        this.activeColor = '#ffffff';
        this.defaultOptions = false;
        this.manualOptions = false;
        clearInterval(this.currentInterval);
      },
      setTime: function(time) {
        this.time = time;
        this.defaultOptions = false;
        this.manualOptions = false;
        this.changeColor(time);
      },
      changeColor: function(time) {
        if (time) {
          this.pickColor();
          this.currentInterval = setInterval(() => this.pickColor(), time * 1000);
        }
      },
      pickColor: function() {
        const newColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        if (this.activeColor === newColor) {
          return this.pickColor();
        }
        this.activeColor = newColor;
      },
      setDefaultOptions: function() {
        this.selectOptionsButton = false;
        this.defaultOptions = true;
      },
      setManualOptions: function() {
        this.selectOptionsButton = false;
        this.manualOptions = true;
      },
      removeColor: function(color) {
        const index = this.colors.indexOf(color);
        if (this.colors.length > 2) {
          this.colors = this.colors.filter((item, i) => i !== index);
        }
      }
    }
});