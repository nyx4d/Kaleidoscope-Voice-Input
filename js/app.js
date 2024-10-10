async function getAudioData() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    
    return { analyser, dataArray };
}



let scene, camera, renderer, analyser, dataArray;
let kaleidoscopes = [];
let clickCount = 0;
let clickTimer = null;

async function init() {
    const audioData = await getAudioData();
    analyser = audioData.analyser;
    dataArray = audioData.dataArray;
    
    // Set up scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Add event listeners
    document.addEventListener('click', handleClick);
    
    // Create initial kaleidoscope
    createKaleidoscope();
    
    animate();
}

function createKaleidoscope(multiplier = 1) {
    const geometry = new THREE.IcosahedronGeometry(1, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    
    for (let i = 0; i < 200 * multiplier; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
        mesh.rotation.set(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI);
        scene.add(mesh);
        kaleidoscopes.push(mesh);
    }
}

function handleClick() {
    clickCount++;
    
    if (clickCount === 1) {
        clickTimer = setTimeout(() => {
            // Single click
            kaleidoscopes.forEach(mesh => scene.remove(mesh));
            kaleidoscopes = [];
            createKaleidoscope();
            clickCount = 0;
        }, 300);
    } else if (clickCount === 2) {
        clearTimeout(clickTimer);
        // Double click
        kaleidoscopes.forEach(mesh => scene.remove(mesh));
        kaleidoscopes = [];
        createKaleidoscope(2);
        clickCount = 0;
    }
}

function animate() {
    requestAnimationFrame(animate);
    
    analyser.getByteFrequencyData(dataArray);
    
    kaleidoscopes.forEach((mesh, index) => {
        const scale = dataArray[index % dataArray.length] / 256;
        mesh.scale.set(scale, scale, scale);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
    });
    
    renderer.render(scene, camera);
}

//init();
var doobie = alert("Make sure your mic is on.");

doobie;

if (doobie == 1) {
	init();
}
