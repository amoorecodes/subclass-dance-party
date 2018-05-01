var LiuKang = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $(this).addClass('.liuKang');
  this.top = top;
  this.left = left;
}

LiuKang.prototype = Object.create(makeDancer.prototype);
LiuKang.prototype = LiuKang;
LiuKang.prototype.oldStep = makeDancer.prototype.step
LiuKang.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
}