import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

export const fetchAPI = MyComponent => (
  class fetchAPIHOC extends Component {
    state = {
      data: false
    }

    static defaultProps = {
      apiURL: ''
    }

    static propTypes = {
      apiURL: PropTypes.string
    }

    async componentDidMount () {
      try {
        const request = await fetch(this.props.apiURL);
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
          title={this.props.title}
        />
      );
    }
  }
);