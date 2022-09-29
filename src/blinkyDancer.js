var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// var oldStep = makeBlinkyDancer.prototype.step;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

}