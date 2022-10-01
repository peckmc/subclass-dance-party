var SkeletonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var img = document.createElement('img');
  img.src = 'src/images/twerk.gif';
  this.$node.append(img);
};

SkeletonDancer.prototype = Object.create(Dancer.prototype);
SkeletonDancer.prototype.constructor = SkeletonDancer;

SkeletonDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
}