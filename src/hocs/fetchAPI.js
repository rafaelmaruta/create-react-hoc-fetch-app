import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export const fetchAPI = (MyComponent, apiUrl) => (
  class fetchAPIHOC extends Component {
    state = {
      data: false
    }

    async componentDidMount () {
      try {
        const request = await fetch(apiUrl);
        const data = await request.json();
        this.setState({ data });
      } catch (err) {
        throw new Error(err);
      }
    }

    render () {
      return (
        <MyComponent
          data={this.state.data}
        />
      );
    }
  }
);