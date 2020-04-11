// 游戏对象
function Game(target) {
  this.snack = new Snake();
  this.food = new Food();
  this.map = target;
}

Game.prototype.render = function(){
  this.food.render(this.map);
  this.snack.render(this.map);
}

Game.prototype.startGame = function () {
  var that = this;
  var timerId = setInterval(function () {
    // 定时器中的this，指向了window
    that.snack.move(that.map, that.food);

    // 蛇撞墙
    var head = that.snack.body[0];
    if (head.x > that.map.offsetWidth / that.snack.width - 1 ||
      head.x < 0 ||
      head.y < 0 ||
      head.y > that.map.offsetHeight / that.snack.height - 1) {
      clearInterval(timerId)
    }

    // 蛇撞到自己，判读蛇头和蛇身体
    // 优化，i从4开始循环
    for (let i = 4; i < that.snack.body.length; i++) {
      var temp = that.snack.body[i];
      if (temp.x == head.x
        && temp.y == head.y) {
        clearInterval(timerId)
      }
    }
  }, 100)

  // 控制蛇移动
  document.onkeyup = function (e) {
    switch (e.keyCode) {
      case 37:
        if (that.snack.direction == 'right') {
          return;
        }
        that.snack.direction = 'left'
        break;
      case 38:
        if (that.snack.direction == 'down') {
          return;
        }
        that.snack.direction = 'up'
        break;
      case 39:
        if (that.snack.direction == 'left') {
          return;
        }
        that.snack.direction = 'right'
        break;
      case 40:
        if (that.snack.direction == 'up') {
          return;
        }
        that.snack.direction = 'down'
        break;
    }
  }
}
