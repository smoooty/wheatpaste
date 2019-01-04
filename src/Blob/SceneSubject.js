import * as THREE from 'three';
import * as noise from './perlin';

import normalMap from '../NormalMap.png';
import abstract from '../Abstract5.png';

export default scene => {
  const geometry = new THREE.SphereGeometry(1, 128, 128);
  const textureLoader = new THREE.TextureLoader();
  const textureEquirec = textureLoader.load(abstract);
  textureEquirec.mapping = THREE.SphericalReflectionMapping;
  textureEquirec.magFilter = THREE.NearestFilter;
  textureEquirec.minFilter = THREE.LinearMipMapLinearFilter;
  const normalLoader = new THREE.TextureLoader();
  const normal = normalLoader.load(normalMap);

  const material = new THREE.MeshPhongMaterial({
    color: 0x00000,
    reflectivity: 0.9,
    shininess: 100,
    normalMap: normal,
    normalScale: new THREE.Vector2(0.1, 0.1),
    envMap: textureEquirec,
    combine: THREE.MixOperation,
    specular: 0xffffff,
  });

  const blob = new THREE.Mesh(geometry, material);
  blob.castShadow = true;
  blob.receiveShadow = true;
  scene.add(blob);

  function deformGeometry(time, position) {
    var k = 1.5;
    let x = position.x / 600;
    let y = position.y < 200 ? 3 : Math.abs(position.y / 100);

    for (var i = 0; i < blob.geometry.vertices.length; i++) {
      var p = blob.geometry.vertices[i];
      p.normalize().multiplyScalar(
        1 +
          0.3 *
            noise.noise.perlin3(p.x * k * x + time, p.y * k * y + time, p.z * k)
      );
    }
  }
  function update(time, mousePosition) {
    let x = mousePosition.x / 600;

    deformGeometry(time, mousePosition);
    blob.geometry.verticesNeedUpdate = true; //must be set or vertices will not update
    blob.geometry.computeVertexNormals();
    blob.geometry.normalsNeedUpdate = true;
    blob.rotation.x += 0.01 + x / 1000;
    blob.rotation.z += 0.01 + x / 1000;

    // ========
    // const angle = time * speed;

    // group.rotation.y = angle;

    // subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;
  }

  return {
    update,
  };
};
