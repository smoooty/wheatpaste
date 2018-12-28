import React, { Component } from 'react';
import * as THREE from 'three';

import * as noise from './perlin';

import { Div } from './styles';

import threeEntryPoint from './threeEntryPoint';

export default class Blob extends Component {
  componentDidMount() {
    threeEntryPoint(this.mount);
  }

  componentWillUnmount() {
    // this.stop();
    // this.mount.removeChild(this.renderer.domElement);
  }

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
