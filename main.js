import * as THREE from "three";
import './style.css';
// import gsap from 'gsap';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';



// Scene 
const scene = new THREE.Scene();

// Creating Sphere 
const geometry = new THREE.SphereGeometry(3,64,32)
const material = new THREE.MeshStandardMaterial({
  color:'#00ff83',
});

const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);

// Sizes
 const sizes = {
  width:window.innerWidth,
  height:window.innerHeight,
 }

// Light
const light = new THREE.PointLight(0xffffff,200,100)
light.position.set(10,10,10);
scene.add(light)

// Camera 
const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height,0.1,100);
camera.position.z=20;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width,sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene,camera);

// Controls

const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2

// Resize 
window.addEventListener('resize',() =>{
  // Upadate Sizes
  sizes.width = window.innerWidth,
  sizes.height = window.innerHeight
  // Update Camera
  camera.updateProjectionMatrix();
  camera.aspect = sizes.width/sizes.height;
  renderer.setSize(sizes.width,sizes.height)
});



const loop = () =>{
  controls.update();
  renderer.render(scene,camera);
  window.requestAnimationFrame(loop)
}
loop()


// timline magiccc
//const tl = gsap.timeline({defaults:{duration:1}})
//tl.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})