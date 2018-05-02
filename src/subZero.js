var SubZero = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.top = top;
  this.left = left;
  $(this.$node).addClass('subZero');

};
SubZero.prototype = Object.create(makeDancer.prototype);
SubZero.prototype.constructor = SubZero;
SubZero.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  $(this.$node).toggleClass('subZero2');
}


// var makeDancer = class BlinkyDancer extends makeDancer {
//   constructor() {
//     super();
//     this.$node = $('<span class="BlinkyDancer"></span>');
//   }
//   step() {
//     super.step();
//     this.$node.toggle();
//   }
// };
