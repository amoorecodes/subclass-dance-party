var LiuKang = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.top = top;
  this.left = left;
  $(this.$node).addClass('liuKang');

};
LiuKang.prototype = Object.create(makeDancer.prototype);
LiuKang.prototype.constructor = LiuKang;
LiuKang.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  $(this.$node).toggleClass('liuKang2');
}
