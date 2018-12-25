import * as THREE from 'three';
import * as noise from './perlin';

import normalMap from '../NormalMap.png';
import abstract from '../Abstract5.png';

// import alphaTexture from '../../../../assets/textures/stripes_gradient.jpg';

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
  // ==========
  // const group = new THREE.Group();

  // const subjectGeometry = deformGeometry(new THREE.IcosahedronGeometry(10, 2));

  // const subjectMaterial = new THREE.MeshStandardMaterial({
  //   color: '#000',
  //   transparent: true,
  //   side: THREE.DoubleSide,
  //   alphaTest: 0.5,
  // });
  // subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
  // subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
  // subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
  // subjectMaterial.alphaMap.repeat.y = 1;

  // const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);

  // const subjectWireframe = new THREE.LineSegments(
  //   new THREE.EdgesGeometry(subjectGeometry),
  //   new THREE.LineBasicMaterial()
  // );

  // group.add(subjectMesh);
  // group.add(subjectWireframe);
  // scene.add(group);

  // group.rotation.z = Math.PI / 4;

  // const speed = 0.02;
  // const textureOffsetSpeed = 0.02;

  // function deformGeometry(geometry) {
  //   for (let i = 0; i < geometry.vertices.length; i += 2) {
  //     const scalar = 1 + Math.random() * 0.8;
  //     geometry.vertices[i].multiplyScalar(scalar);
  //   }

  //   return geometry;
  // }

  function update(time, mousePosition) {
    console.log('mouse', mousePosition.x);
    //var time = performance.now() * 0.0006;
    var k = 1.5;

    // let x = this.props.x / 2;
    // let y = this.props.y;
    let x = mousePosition.x / 600;
    let y = 3;
    // let y = this.props.y < 0 ? 1 : this.props.y / 10;

    for (var i = 0; i < blob.geometry.vertices.length; i++) {
      var p = blob.geometry.vertices[i];
      p.normalize().multiplyScalar(
        1 +
          0.3 *
            noise.noise.perlin3(p.x * k * x + time, p.y * k * y + time, p.z * k)
      );
    }
    blob.geometry.verticesNeedUpdate = true; //must be set or vertices will not update
    blob.geometry.computeVertexNormals();
    blob.geometry.normalsNeedUpdate = true;
    // blob.rotation.x += 0.01 + x / 1000;
    // blob.rotation.z += 0.01 + x / 1000;

    // ========
    // const angle = time * speed;

    // group.rotation.y = angle;

    // subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

    // subjectWireframe.material.color.setHSL(Math.sin(angle * 2), 0.5, 0.5);

    // const scale = (Math.sin(angle * 8) + 6.4) / 5;
    // subjectWireframe.scale.set(scale, scale, scale);
  }

  return {
    update,
  };
};
