import React from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../hocs/fetchAPI';
import { withLoading } from '../hocs/withLoading';

const apiURL = 'http://www.mocky.io/v2/5b1afbbe3300008825fb161b';

const Infos = ({ data }) => {
  const { avatar_url, blog, login, name } = data;

  return (
    <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
      <li>
        <img
          alt='me'
          src={avatar_url}
          style={{ margin: '0 auto' }}
        />
      </li>
      <li>My name: {name}</li>
      <li>My username: {login}</li>
      <li>My blog: {blog}</li>
    </ul>
  );
};

Infos.defaultProps = {
  data: {}
};

Infos.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    blog: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string
  })
};

const InfosLoading = withLoading(Infos);

export default fetchAPI(InfosLoading, apiURL);
