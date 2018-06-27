import React from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../hocs/fetchAPI';
import { withLoading } from '../hocs/withLoading';

const apiURL = 'http://www.mocky.io/v2/5b1afc89330000131ffb161e';

const ReposList = ({ data }) => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>Minha lista de repos:</li>
    {data.map(({ id, name, url }) => (
      <li key={id}>
        <a
          href={url}
          rel='noopener noreferrer'
          target='_blank'
        >
          {name}
        </a>
      </li>
    ))}
  </ul>
);

ReposList.defaultProps = {
  data: []
};

ReposList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string
  }))
};

const ListLoading = withLoading(ReposList);

export default fetchAPI(ListLoading, apiURL);
