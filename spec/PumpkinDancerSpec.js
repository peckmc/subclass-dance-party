// describe('pumpkinDancer', function() {

//   var pumpkinDancer, clock;
//   var timeBetweenSteps = 100;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     pumpkinDancer = new PumpkinDancer(10, 20, timeBetweenSteps);
//   });

//   it('should have a jQuery $node object', function() {
//     expect(pumpkinDancer.$node).to.be.an.instanceof(jQuery);
//   });

//   it('should have a step function that makes its node blink', function() {
//     sinon.spy(pumpkinDancer.$node, 'toggle');
//     pumpkinDancer.step();
//     expect(pumpkinDancer.$node.toggle.called).to.be.true;
//   });

//   describe('dance', function() {
//     it('should call step at least once per second', function() {
//       sinon.spy(pumpkinDancer, 'step');
//       expect(pumpkinDancer.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(pumpkinDancer.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(pumpkinDancer.step.callCount).to.be.equal(2);
//     });
//   });
// });
