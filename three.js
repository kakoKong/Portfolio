import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
import { TrackballControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/TrackballControls.js'

const scene = new THREE.Scene();
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

const geometry2 = new THREE.PlaneGeometry( 10, 10 );
const material2 = new THREE.MeshBasicMaterial( {color: 0x4B7591, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry2, material2 );
plane.rotation.x = 90;
scene.add( plane );

// const cube = addBox();
// scene.add(cube)

const sec = addReg();
sec.position.y = 1;
sec.rotation.x = 10;
scene.add(sec)

camera.position.z = 5;
function addBox(){
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    return cube
}
function addReg(){
    const geometry = new THREE.BoxGeometry(5, 1);
    const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    return cube
}
function animate() {
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render( scene, camera );
    
};

animate();
// // Renderer
// const canvas = document.getElementById( "gl-canvas" );
// renderer = new THREE.WebGL1Renderer({ canvas });
// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.render(scene, camera);
// renderer.shadowMap.enabled = true;

// document.body.appendChild(renderer.domElement);

// // Make Canvas Responsive
window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}