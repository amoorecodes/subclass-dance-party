var Kitana = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $(this).addClass('kitana');
  // this.toggleOwnClass();
  

}

Kitana.prototype = Object.create(makeDancer.prototype);
Kitana.prototype.constructor = Kitana;
Kitana.prototype.oldStep = makeDancer.prototype.step
Kitana.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
}
// Kitana.prototype.toggleOwnClass = function() {
//   this.toggleClass('.kitana');
// }