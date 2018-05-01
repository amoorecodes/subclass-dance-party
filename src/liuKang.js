var LiuKang = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  $(this).addClass('.liuKang');
}

LiuKang.prototype = Object.create(makeBlinkyDancer.prototype);
LiuKang.prototype = LiuKang;
