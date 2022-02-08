import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
import { TrackballControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/TrackballControls.js'

let lookX = 7;
let lookY = 0;
let lookZ = 0;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcef2fc);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const canvas = document.getElementById( "gl-canvas" );
const renderer = new THREE.WebGL1Renderer({ canvas });
renderer.shadowMap.enabled = true;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
directionalLight.position.set(1, 1000, 10);
directionalLight.castShadow = true;
scene.add(directionalLight)

const light = new THREE.AmbientLight( 0x404040 ); // soft white light scene.add( light );
scene.add(light)

const geometry2 = new THREE.PlaneGeometry( 100, 100 );
const material2 = new THREE.MeshBasicMaterial( {color: 0x264906, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry2, material2 );
plane.rotation.x = Math.PI / 2;
plane.position.y = -5;
// plane.rotation.y = 1;
scene.add( plane );

// const cube = addBox();
// scene.add(cube)

const edu = addReg();
const ex = addReg();
const proj =  addReg();
const skill = addReg();

proj.position.z = -40;
proj.rotation.x = 0;
scene.add(proj);
// edu.position.x = 10;
edu.position.x = 40;
edu.rotation.y = Math.PI / 2;
scene.add(edu);

ex.position.z = 40;
ex.rotation.x = 0;
scene.add(ex)

skill.position.x = -40;
skill.rotation.y = Math.PI / 2;
scene.add(skill);

const controls = new TrackballControls(camera, renderer.domElement)
camera.position.set(8, 0, 0);
camera.lookAt(0, 10, 0);
function addBox(){
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    return cube
}
function addReg(){
    const geometry = new THREE.BoxGeometry(50, 10);
    const material = new THREE.MeshPhongMaterial( { color: 0xB2ACAC } );
    const cube = new THREE.Mesh( geometry, material );
    return cube
}
function animate() {
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // console.log(document.documentElement.scrollTop)
    // controls.update()
    
    camera.lookAt(lookX, lookY, lookZ)
    renderer.render( scene, camera );
    // console.log(camera.position);
    
};

animate()
// document.addEventListener( 'mousewheel', (event) => { 
//     camera.position.z += event.deltaY/120;
//     camera.position.x -= event.deltaY/120;
//     console.log(document.body.offsetTop)
//   })

function updateCamera(ev) {
    // let div1 = document.getElementById("div1");
    lookX = 10 - window.scrollY / 8.0;
    lookZ = 10 - window.scrollY / 8;
    console.log(window.scrollY)
    
    // camera.position.z = 10 - window.scrollY / 80.0;
}

window.addEventListener("scroll", updateCamera);
// // Renderer
// const canvas = document.getElementById( "gl-canvas" );
// renderer = new THREE.WebGL1Renderer({ canvas });
// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.render(scene, camera);
// renderer.shadowMap.enabled = true;

// document.body.appendChild(renderer.domElement);


// x: 7, y: 0, z: 0.0}

//{x: 0, y: 0, z: 7}

//{x: -7, y: 0, z: 0.0}

//{x: 0, y: 0, z: -7}

// // Make Canvas Responsive
window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize( window.innerWidth, window.innerHeight );

}