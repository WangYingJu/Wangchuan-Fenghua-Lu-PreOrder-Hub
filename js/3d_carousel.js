// 獲取根元素的字體大小
var rootFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

// 將 rem 值轉換為像素值
function remToPx(rem) {
  return rem * rootFontSize;
}

// You can change global variables here:
var radius = 0; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees

// Calculate window width in pixels
var windowWidth = window.innerWidth;

// Check if window width is smaller or equal to 7.68rem (in pixels)
if (windowWidth <= 768) {
  radius = windowWidth / 3; // 半徑長度 (單位: px)
  console.log("xxoo111");
} else {
  radius = windowWidth / 6; // 半徑長度 (單位: px)
  console.log("xxoo333");
}

// You can change image width and height here:
var imgWidth, imgHeight;

if (windowWidth <= 540) {
  imgWidth = remToPx(2.304);
  imgHeight = remToPx(4.4416);
  console.log("xxoo111");
} else if (windowWidth > 540 && windowWidth <= 768) {
  imgWidth = remToPx(2.88);
  imgHeight = remToPx(5.552);
  console.log("xxoo222");
} else if (windowWidth > 768) {
  imgWidth = remToPx(1.8);
  imgHeight = remToPx(3.47);
  console.log("xxoo333");
}

// 測試
// console.log({ windowWidth, remtopx: remToPx(7.68) });

// Link of background music - set 'null' if you dont want to play background music
var bgMusicURL =
  "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
var bgMusicControls = null; // Show UI music control

// animation start after 1000 miliseconds
setTimeout(init, 1000);

var odrag = document.getElementById("drag-container");
var ospin = document.getElementById("spin-container");
var aImg = ospin.getElementsByTagName("img");
var aVid = ospin.getElementsByTagName("video");
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById("ground");
ground.style.width = radius * 2.5 + "px";
ground.style.height = radius * 2.5 + "px";

// Calculate radius value
var radiusPercentage = (radius / windowWidth) * 100; // 半徑的百分比

// 設置輪播容器的半徑
ospin.style.borderRadius = `calc(50% - (100vw * ${radiusPercentage / 100}))`;

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      "rotateY(" +
      i * (360 / aEle.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? "running" : "paused";
}

var sX,
  sY,
  nX,
  nY,
  desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

// auto spin
if (autoRotate) {
  var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
  ospin.style.animation = `${animationName} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}
