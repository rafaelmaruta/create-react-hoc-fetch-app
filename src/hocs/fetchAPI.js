import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export const fetchAPI = MyComponent => {
  class fetchAPIHOC extends Component {
    state = {
      data: false
    }

    async componentDidMount () {
      const infosData = await fetch('http://www.mocky.io/v2/5b1afbbe3300008825fb161b');
      this.setState({ infosData })
    }

    render () {
      return (
        <MyComponent data={this.state.data} />
      )
    }
  }

  return fetchAPIHOC;
}