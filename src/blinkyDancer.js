var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.top = top;
  this.left = left;
  

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.$node = $('<span class="blinkyDancer"></span>');

};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
  // this.toggleClass($'.subzero')
  // this.oldStep();
 
};

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
