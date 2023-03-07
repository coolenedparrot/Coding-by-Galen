import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);


// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// Stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);


//Painting
const paintingTexture = new THREE.TextureLoader().load('media/thebathingpool.jpeg');

const paintingBlock = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: paintingTexture }));

scene.add(paintingBlock);

paintingBlock.position.z = -4;
paintingBlock.position.x = 0;


//About
const aboutTexture = new THREE.TextureLoader().load('media/about.png');

const aboutBlock = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: aboutTexture }));

scene.add(aboutBlock);

aboutBlock.position.z = -12;
aboutBlock.position.x = 0;


// Portfolio
const portfolioTexture = new THREE.TextureLoader().load('media/portfolio.png');

const portfolioBlock = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: portfolioTexture }));

scene.add(portfolioBlock);

portfolioBlock.position.z = -19;
portfolioBlock.position.x = 0;


// Connect
const connectTexture = new THREE.TextureLoader().load('media/connect.png');

const connectBlock = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: connectTexture }));

scene.add(connectBlock);

connectBlock.position.z = -27;
connectBlock.position.x = 0;


// Scroll Animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  connectBlock.rotation.x += 0.00;
  connectBlock.rotation.y += 0.00;
  connectBlock.rotation.z += 0.00;

  portfolioBlock.rotation.x += 0.00;
  connectBlock.rotation.y += 0.00;
  connectBlock.rotation.z += 0.00;

  portfolioBlock.rotation.y += 0.00;
  portfolioBlock.rotation.z += 0.00;

  camera.position.z = t * 0.01;
  camera.position.x = t * -0.0000;
  camera.rotation.y = t * -0.0000;
}

document.body.onscroll = moveCamera;
moveCamera();


// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  aboutBlock.rotation.x += 0.00;
  aboutBlock.rotation.y += 0.000;
  aboutBlock.rotation.z += 0.00;

  portfolioBlock.rotation.x += 0.000;

  // controls.update();

  renderer.render(scene, camera);
}

animate();


//Cursor
const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.clientY - $("body").scrollTop())+"px; left: "+(e.clientX - 10)+"px;")
  })

  document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
  })