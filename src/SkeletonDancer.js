var SkeletonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="/src/twerk.gif"></span>');
};

SkeletonDancer.prototype = Object.create(Dancer.prototype);
SkeletonDancer.prototype.constructor = SkeletonDancer;

SkeletonDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}