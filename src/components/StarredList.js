import React from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../hocs/fetchAPI';
import { withLoading } from '../hocs/withLoading';

const apiURL = 'http://www.mocky.io/v2/5b1afc48330000b435fb161d';

const StarredList = ({ data }) => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>Minha lista de favoritos:</li>
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

StarredList.defaultProps = {
  data: []
};

StarredList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string
  }))
};

const ListLoading = withLoading(StarredList);

export default fetchAPI(ListLoading, apiURL);
