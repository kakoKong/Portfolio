import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
import { TrackballControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/TrackballControls.js'

let lookX = 7;
let lookY = 0;
let lookZ = 0;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const canvas = document.getElementById( "gl-canvas" );
const renderer = new THREE.WebGL1Renderer({ canvas });
renderer.shadowMap.enabled = true;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(100, -300, 300);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;
dirLight.shadow.camera.left = -400;
dirLight.shadow.camera.right = 350;
dirLight.shadow.camera.top = 400;
dirLight.shadow.camera.bottom = -300;
dirLight.shadow.camera.near = 100;
dirLight.shadow.camera.far = 800;
scene.add(dirLight);

const geometry2 = new THREE.PlaneGeometry( 100, 100 );
const material2 = new THREE.MeshBasicMaterial( {color: 0x264906, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry2, material2 );
plane.rotation.x = Math.PI / 2;
plane.position.y = -5;
// plane.rotation.y = 1;
// scene.add( plane );

// const cube = addBox();
// scene.add(cube)

const edu = addReg('/assets/ferret.png');
const ex = addReg('/assets/threejs.png');
const proj =  addReg('/assets/thaiso.png');
const skill = addReg('/assets/UniRev.JPG');

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

// const controls = new TrackballControls(camera, renderer.domElement)
camera.position.set(8, 0, 0);
// camera.lookAt(0, 10, 0);
function addStar(){
    const geometry= new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff})
    const star = new THREE.Mesh( geometry, material)

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z)
    scene.add(star)

}
Array(200).fill().forEach(addStar)

function addReg(tex){
    const loader = new THREE.TextureLoader();
    console.log(loader)
    const geometry = new THREE.BoxGeometry(40, 25);
    const material = new THREE.MeshBasicMaterial( { map: loader.load(tex)} );
    const cube = new THREE.Mesh( geometry, material );
    return cube
}


var t = 0
function animate() {
    requestAnimationFrame( animate );
    // t += 0.01
    // camera.rotation.y += 0.03
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // camera.position.x += 0.1
    // camera.position.x += 0.1;
    // camera.position.x = 20*Math.cos(t) + 0;
    // camera.position.z = 20*Math.sin(t) + 0; 
    // camera.rotation.x += 1 * Math.PI / 180
    // console.log(document.documentElement.scrollTop)
    // controls.update()
    
    // camera.lookAt(lookX, lookY, lookZ)
    renderer.render( scene, camera );
    // console.log(camera.position);
    
};

animate()
// document.addEventListener( 'mousewheel', (event) => { 
//     camera.position.z += event.deltaY/120;
//     camera.position.x -= event.deltaY/120;
//     // console.log(document.body.offsetTop)
//     camera.rotation.x = 1 * (Math.PI / 180) * (window.scrollY / 800.0)
//   })

var prev = 0
function updateCamera(ev) {
    const t = document.body.getBoundingClientRect().top;
    console.log(t)
    // camera.rotation.y += t * -0.0001
    // let div1 = document.getElementById("div1");
    if(scrollY > prev){
        camera.rotation.y -= 0.03
        prev = scrollY
    }
    else{
        camera.rotation.y += 0.03
        prev = scrollY
    }
    console.log('scroll')
    // camera.position.z = 10 - window.scrollY / 80.0;
}

window.addEventListener("scroll", updateCamera);


// // Make Canvas Responsive
window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize( window.innerWidth, window.innerHeight );

}