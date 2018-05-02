var Kitana = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.top = top;
  this.left = left;
  $(this.$node).addClass('kitana');

};
Kitana.prototype = Object.create(makeDancer.prototype);
Kitana.prototype.constructor = Kitana;
Kitana.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  $(this.$node).toggleClass('kitana2');
}
debugger
console.log(Kitana.prototype.constructor);
