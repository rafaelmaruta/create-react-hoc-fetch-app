import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export const fetchAPI = (MyComponent, apiUrl) => {
  class fetchAPIHOC extends Component {
    state = {
      data: false
    }

    async componentDidMount () {
      const request = await fetch(apiUrl);
      const data = await request.json();
      this.setState({ data });
    }

    render () {
      return (
        <MyComponent
          data={this.state.data}
        />
      );
    }
  }

  return fetchAPIHOC;
};