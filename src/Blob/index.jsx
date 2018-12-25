import React, { Component } from 'react';
import * as THREE from 'three';

import * as noise from './perlin';

import { Div } from './styles';

import normalMap from '../NormalMap.png';
import abstract from '../Abstract5.png';

import threeEntryPoint from './threeEntryPoint';

export default class Blob extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    threeEntryPoint(this.mount);
    // window.addEventListener('resize', () => this.resize());
    // const width = this.mount.clientWidth;
    // const height = this.mount.clientHeight;
    // console.log(width, this.mount.clientWidth);
    // //ADD SCENE
    // this.scene = new THREE.Scene();
    // //ADD CAMERA
    // this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    // this.camera.position.z = 2.5;

    // //ADD RENDERER
    // this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // this.renderer.setClearColor(0x000000, 0);
    // this.renderer.shadowMap.enabled = true;
    // this.renderer.gammaInput = true;
    // this.renderer.gammaOutput = true;
    // this.renderer.setSize(width, height);
    // this.mount.appendChild(this.renderer.domElement);
    // //ADD CUBE
    // const geometry = new THREE.SphereGeometry(1, 128, 128);
    // // add reflectivity
    // // add environment map
    // // texture loader, pass variable thru to the map
    // // make shape, unwrap and UVs
    // const textureLoader = new THREE.TextureLoader();
    // //SMAA, FXAA post processing
    // //bloom unreal post processing on lights
    // const textureEquirec = textureLoader.load(abstract);
    // textureEquirec.mapping = THREE.SphericalReflectionMapping;
    // textureEquirec.magFilter = THREE.NearestFilter;
    // textureEquirec.minFilter = THREE.LinearMipMapLinearFilter;
    // //textureEquirec.wrapS = THREE.RepeatWrapping;
    // //textureEquirec.wrapT = THREE.RepeatWrapping;

    // const normalLoader = new THREE.TextureLoader();
    // const normal = normalLoader.load(normalMap);

    // const material = new THREE.MeshPhongMaterial({
    //   color: 0x00000,
    //   reflectivity: 0.9,
    //   shininess: 100,
    //   normalMap: normal,
    //   normalScale: new THREE.Vector2(0.1, 0.1),
    //   envMap: textureEquirec,
    //   combine: THREE.MixOperation,
    //   specular: 0xffffff,
    // });

    // this.blob = new THREE.Mesh(geometry, material);
    // this.blob.castShadow = true;
    // this.blob.receiveShadow = true;
    // this.scene.add(this.blob);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    // ambientLight.name = 'ambientLight';
    // this.scene.add(ambientLight);

    // const directionalLight1 = new THREE.DirectionalLight(0xffeeee, 0.01);
    // directionalLight1.position.set(-200, 100, 800);
    // directionalLight1.name = 'directionalLight1';
    // directionalLight1.castShadow = true;
    // directionalLight1.shadow.camera.top = 380;
    // directionalLight1.shadow.camera.bottom = -100;
    // directionalLight1.shadow.camera.left = -420;
    // directionalLight1.shadow.camera.right = 420;
    // this.scene.add(directionalLight1);

    // const directionalLight2 = new THREE.DirectionalLight(0xffeeee, 0.04);
    // directionalLight2.position.set(800, 2000, 800);
    // directionalLight2.shadow.camera.top = -380;
    // directionalLight2.castShadow = true;
    // directionalLight2.name = 'directionalLight2';
    // this.scene.add(directionalLight2);

    // this.start();
    // //this.resize();
  }

  componentWillUnmount() {
    // this.stop();
    // this.mount.removeChild(this.renderer.domElement);
  }

  resize = () => {
    const width = this.mount.clientWidth;
    const adjustedSize = 1200 / width;
    console.log('adjustedSize', adjustedSize);
    //this.camera.position.z = adjustedSize > 2 ? adjustedSize : 2.3;
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  update = () => {
    var time = performance.now() * 0.0006;
    var k = 1.5;

    // let x = this.props.x / 2;
    // let y = this.props.y;
    let x = 2 / 2;
    let y = 3;
    // let y = this.props.y < 0 ? 1 : this.props.y / 10;

    for (var i = 0; i < this.blob.geometry.vertices.length; i++) {
      var p = this.blob.geometry.vertices[i];
      p.normalize().multiplyScalar(
        1 +
          0.3 *
            noise.noise.perlin3(p.x * k * x + time, p.y * k * y + time, p.z * k)
      );
    }
    this.blob.geometry.verticesNeedUpdate = true; //must be set or vertices will not update
    this.blob.geometry.computeVertexNormals();
    this.blob.geometry.normalsNeedUpdate = true;
  };

  animate = () => {
    // this.blob.rotation.x += 0.01 + this.props.x / 1000;
    // this.blob.rotation.z += 0.01 + this.props.x / 1000;
    this.blob.rotation.x += 0.01 + 2 / 1000;
    this.blob.rotation.z += 0.01 + 3 / 1000;
    this.update();
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <Div
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
