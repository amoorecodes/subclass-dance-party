var SubZero = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.top = top;
  this.left = left;
  $(this).addClass('.subZero');
  // this.$node = $('<span class="dancer subzero" img></span>');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.$node = $('<span class="blinkyDancer"></span>');

};
SubZero.prototype = Object.create(makeDancer.prototype);
SubZero.prototype.constructor = SubZero;
SubZero.prototype.oldStep = makeDancer.prototype.step
SubZero.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
}
  // this.toggleClass($'.subzero')
  // this.oldStep();
 
// var makeBlinkyDancer = class BlinkyDancer extends makeDancer {
//   constructor() {
//     super();
//     this.$node = $('<span class="BlinkyDancer"></span>');
//   }
//   step() {
//     super.step();
//     this.$node.toggle();
//   }
// };
