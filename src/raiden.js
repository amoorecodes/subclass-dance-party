var Raiden = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  $(this).addClass('.raiden');
}

Raiden.prototype = Object.create(makeBlinkyDancer.prototype);
Raiden.prototype = Raiden;
