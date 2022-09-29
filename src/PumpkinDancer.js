var PumpkinDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var img = document.createElement('img');
  img.src = 'src/images/pumpkin.gif';
  this.$node.append(img);
};

PumpkinDancer.prototype = Object.create(Dancer.prototype);
PumpkinDancer.prototype.constructor = PumpkinDancer;

PumpkinDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
}