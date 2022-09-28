var PumpkinDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="src/pumpkin.gif"></span>');
};

PumpkinDancer.prototype = Object.create(Dancer.prototype);
PumpkinDancer.prototype.constructor = PumpkinDancer;

PumpkinDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}