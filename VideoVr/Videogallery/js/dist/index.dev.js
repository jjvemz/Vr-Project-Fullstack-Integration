"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var THREE = _interopRequireWildcard(require("three"));

var _VRButton = require("https://unpkg.com/three@0.141.0//examples/jsm/webxr/VRButton.js");

var _OrbitControls = require("https://unpkg.com/three@0.141.0//examples/jsm/controls/OrbitControls.js");

var _BoxLineGeometry = require("https://unpkg.com/three@0.141.0//examples/jsm/geometries/BoxLineGeometry.js");

var _threeMeshUi = _interopRequireDefault(require("../src/three-mesh-ui.js"));

var _hellbound = _interopRequireDefault(require("./assets/hellbound.jpg"));

var _RobotoMsdf = _interopRequireDefault(require("./assets/Roboto-msdf.json"));

var _RobotoMsdf2 = _interopRequireDefault(require("./assets/Roboto-msdf.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var scene, camera, renderer, controls;
window.addEventListener("load", init);
window.addEventListener("resize", onWindowResize); //

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x505050);
  camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 0.1, 100);
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  renderer.xr.enabled = true;
  document.body.appendChild(_VRButton.VRButton.createButton(renderer));
  document.body.appendChild(renderer.domElement);
  controls = new _OrbitControls.OrbitControls(camera, renderer.domElement);
  camera.position.set(0, 1.6, 0);
  controls.target = new THREE.Vector3(0, 1, -1.8);
  controls.update(); // ROOM

  var room = new THREE.LineSegments(new _BoxLineGeometry.BoxLineGeometry(6, 6, 6, 10, 10, 10).translate(0, 3, 0), new THREE.LineBasicMaterial({
    color: 0x808080
  }));
  scene.add(room); // TEXT PANEL

  makeTextPanel(); //

  renderer.setAnimationLoop(loop);
} //


function makeTextPanel() {
  var container = new _threeMeshUi["default"].Block({
    ref: "container",
    padding: 0.025,
    fontFamily: _RobotoMsdf["default"],
    fontTexture: _RobotoMsdf2["default"],
    fontColor: new THREE.Color(0xffffff),
    backgroundOpacity: 0
  });
  container.position.set(0, 1, -1.8);
  container.rotation.x = -0.55;
  scene.add(container); //

  var title = new _threeMeshUi["default"].Block({
    height: 0.2,
    width: 1.5,
    margin: 0.025,
    justifyContent: "center",
    fontSize: 0.09
  });
  title.add(new _threeMeshUi["default"].Text({
    content: "spiny bush viper"
  }));
  container.add(title); //

  var leftSubBlock = new _threeMeshUi["default"].Block({
    height: 0.95,
    width: 1.0,
    margin: 0.025,
    padding: 0.025,
    textAlign: "left",
    justifyContent: "end"
  });
  var caption = new _threeMeshUi["default"].Block({
    height: 0.07,
    width: 0.37,
    textAlign: "center",
    justifyContent: "center"
  });
  caption.add(new _threeMeshUi["default"].Text({
    content: "Mind your fingers",
    fontSize: 0.04
  }));
  leftSubBlock.add(caption); //

  var rightSubBlock = new _threeMeshUi["default"].Block({
    margin: 0.025
  });
  var subSubBlock1 = new _threeMeshUi["default"].Block({
    height: 0.35,
    width: 0.5,
    margin: 0.025,
    padding: 0.02,
    fontSize: 0.04,
    justifyContent: "center",
    backgroundOpacity: 0
  }).add(new _threeMeshUi["default"].Text({
    content: "Known for its extremely keeled dorsal scales that give it a "
  }), new _threeMeshUi["default"].Text({
    content: "bristly",
    fontColor: new THREE.Color(0x92e66c)
  }), new _threeMeshUi["default"].Text({
    content: " appearance."
  }));
  var subSubBlock2 = new _threeMeshUi["default"].Block({
    height: 0.53,
    width: 0.5,
    margin: 0.01,
    padding: 0.02,
    fontSize: 0.025,
    alignItems: "start",
    textAlign: 'justify',
    backgroundOpacity: 0
  }).add(new _threeMeshUi["default"].Text({
    content: "The males of this species grow to maximum total length of 73 cm (29 in): body 58 cm (23 in), tail 15 cm (5.9 in). Females grow to a maximum total length of 58 cm (23 in). The males are surprisingly long and slender compared to the females.\nThe head has a short snout, more so in males than in females.\nThe eyes are large and surrounded by 9–16 circumorbital scales. The orbits (eyes) are separated by 7–9 scales."
  }));
  rightSubBlock.add(subSubBlock1, subSubBlock2); //

  var contentContainer = new _threeMeshUi["default"].Block({
    contentDirection: "row",
    padding: 0.02,
    margin: 0.025,
    backgroundOpacity: 0
  });
  contentContainer.add(leftSubBlock, rightSubBlock);
  container.add(contentContainer); //

  new THREE.TextureLoader().load(_hellbound["default"], function (texture) {
    leftSubBlock.set({
      backgroundTexture: texture
    });
  });
} //


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
} //


function loop() {
  // Don't forget, ThreeMeshUI must be updated manually.
  // This has been introduced in version 3.0.0 in order
  // to improve performance
  _threeMeshUi["default"].update();

  controls.update();
  renderer.render(scene, camera);
}