var Raiden = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.top = top;
  this.left = left;
  $(this.$node).addClass('raiden');

};
Raiden.prototype = Object.create(makeDancer.prototype);
Raiden.prototype.constructor = Raiden;
Raiden.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  $(this.$node).toggleClass('raiden2');
}
