// the rooster

var rooster = $("#rooster-container"),
  body = $("#body"),
  head = $("#head"),
  comb = $("#comb"),
  wattle = $("#wattle"),
  rightFoot = $("#r-foot"),
  leftFoot = $("#l-foot"),
  feathers = $("#feathers"),
  topClouds = $(".cloud.top"),
  bottomClouds = $(".cloud.bottom");

TweenLite.defaultEase = Power0.easeNone;

var tlRooster = new TimelineMax({
  repeat: -1,
  yoyo: true
});

tlRooster
// here we're saying: move the rooster along the y axis (aka, up and down) 2 pixels, and take 0.3 seconds to do that
  .to(rooster, 0.3, {
    y: 2
  })
  // make the feet move
  .fromTo(rightFoot, 0.6, {
    rotation: 14
  }, {
    rotation: -14,
    easing: Power2.easeInOut
  }, '0')
  .fromTo(leftFoot, 0.6, {
    rotation: -14
  }, {
    rotation: 14,
    easing: Power2.easeInOut
  }, '0')
  // slightly rotate the rest of the body to look like it's walking
  .to([body, head, feathers, wattle, comb], 0.6, {
    rotation: -3
  }, '0');

var tlMovement = new TimelineMax({
  repeat: -1,
  yoyo: true
});
tlMovement
  .to(feathers, 0.6, {
    rotation: '-=5'
  }, '0')
  .to(wattle, 0.6, {
    rotation: '-=4'
  }, '0')
  .to(comb, 0.6, {
    rotation: '-=4'
  }, '0');

var containerWidth = $("#container").innerWidth();
var tlMoveForward = new TimelineMax();
tlMoveForward
  .to(rooster, 30, {
    x: -(containerWidth - 450)
  });

var tlMoveForward = new TimelineMax();
tlMoveForward
  .to(rooster, 15, {
    x: -(containerWidth - 450),
    onComplete: function () {
      tlRooster.pause();
      tlMovement.pause();
      TweenMax.to([body, head, leftFoot, rightFoot, feathers, comb, wattle], 0.3, {
        rotation: 0,
        x: 0,
        y: 0
      });
    }
  });
