import React, { Component } from 'react';

import { Div } from './styles';

import threeEntryPoint from './threeEntryPoint';

export default class Blob extends Component {
  componentDidMount() {
    threeEntryPoint(this.mount);
  }

  render() {
    return (
      <Div
        css={this.props.css}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
