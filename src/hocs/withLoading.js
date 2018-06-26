import React from 'react';
import logo from '../logo.svg';

export const withLoading = Component =>
  props =>
    props.data
      ? <Component {...props} />
      : <img
          alt='logo'
          className='App-logo'
          src={logo}
          style={{ display: 'block', margin: '0 auto' }}
        />
