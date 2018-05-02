var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  $(this.$node).addClass('blinkyDancer');
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle(); 
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
