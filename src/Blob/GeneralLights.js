import * as THREE from 'three';

export default scene => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  ambientLight.name = 'ambientLight';
  scene.add(ambientLight);

  const directionalLight1 = new THREE.DirectionalLight(0xffeeee, 0.01);
  directionalLight1.position.set(-200, 100, 800);
  directionalLight1.name = 'directionalLight1';
  directionalLight1.castShadow = true;
  directionalLight1.shadow.camera.top = 380;
  directionalLight1.shadow.camera.bottom = -100;
  directionalLight1.shadow.camera.left = -420;
  directionalLight1.shadow.camera.right = 420;
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xffeeee, 0.04);
  directionalLight2.position.set(800, 2000, 800);
  directionalLight2.shadow.camera.top = -380;
  directionalLight2.castShadow = true;
  directionalLight2.name = 'directionalLight2';
  scene.add(directionalLight2);

  const rad = 80;

  function update(time) {
    const x = rad * Math.sin(time * 0.2);
    directionalLight2.position.x = x;
  }

  return {
    update,
  };
};
