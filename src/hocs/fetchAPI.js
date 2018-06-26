import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

export const fetchAPI = (MyComponent, apiUrl) => {
  class fetchAPIHOC extends Component {
    state = {
      data: false
    }

    static defaultProps = {
      apiUrl: ''
    }

    static propTypes = {
      apiUrl: PropTypes.string
    }

    async componentDidMount () {
      const request = await fetch(this.props.apiUrl);
      const data = await request.json();
      this.setState({ data });
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

  return fetchAPIHOC;
}