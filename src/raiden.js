var Raiden = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  $(this).addClass('.raiden');
  
}

Raiden.prototype = Object.create(makeDancer.prototype);
Raiden.prototype = Raiden;
Raiden.prototype.oldStep = makeDancer.prototype.step
Raiden.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
}
