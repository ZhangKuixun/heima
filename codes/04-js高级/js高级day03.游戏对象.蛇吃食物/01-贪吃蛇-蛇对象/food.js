function Food(options) {
  options = options || {}

  this.width = options.width || 20;
  this.height = options.height || 20;
  this.bgc = options.bgc || 'blue';
  this.x = options.x || 0;
  this.y = options.y || 0;
}

Food.prototype.render = function (map) {
  var div = document.createElement('div')

  // this 谁调用，就指向谁
  div.style.width = this.width + "px"
  div.style.height = this.height + "px"
  div.style.backgroundColor = this.bgc
  div.style.position = 'absolute'

  var x = parseInt(Math.random() * map.offsetWidth / this.width)
  var y = parseInt(Math.random() * map.offsetHeight / this.height)

  div.style.left = x * this.width + 'px'
  div.style.top = y * this.height + 'px'

  map.appendChild(div)
}