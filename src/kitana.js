var Kitana = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  $(this).addClass('.kitana');

}

Kitana.prototype = Object.create(makeBlinkyDancer.prototype);
Kitana.prototype.constructor = Kitana;