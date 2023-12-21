const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/img_3d/278394078_733321498035940_4215525978629696273_n.jpg'); // Remplacez 'chemin_vers_votre_image.jpg' par le chemin vers votre image

        const geometry = new THREE.SphereGeometry(2, 32, 32); // Création d'une sphère
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.002; // Rotation automatique de la sphère (optionnel)
            renderer.render(scene, camera);
        }


// Création du bouton
const button = document.createElement('button');
button.textContent = 'Accédez à une autre page';
button.style.position = 'absolute';
button.style.top = '90%';
button.style.left = '50%';
button.style.transform = 'translate(-50%, -50%)';
button.style.padding = '10px 20px';
button.style.backgroundColor = '#000000'; /* Couleur de fond du bouton */
button.style.color = 'white'; /* Couleur du texte */
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.fontSize = '16px';
button.style.fontFamily = 'Rubik Scribble, sans-serif'; /* Police de caractères "Rubik Scribble" */
button.style.cursor = 'pointer';
button.style.transition = 'background-color 0.3s ease'; /* Animation au survol */

button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#FF2F00'; /* Changement de couleur au survol */
});

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '#220909'; /* Retour à la couleur initiale après le survol */
});

// Lien vers l'autre fichier HTML (dans le même répertoire)
const autrePageURL = './page_after_acces/page.html'; // Mettez le nom de votre fichier ici

// Redirection vers l'autre fichier HTML au clic sur le bouton
button.addEventListener('click', function() {
    window.location.href = autrePageURL;
});

document.body.appendChild(button);

        
        
        
        animate();
