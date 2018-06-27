import React from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../hocs/fetchAPI';
import { withLoading } from '../hocs/withLoading';

const List = ({ data, title }) => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>{title}</li>
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

List.defaultProps = {
  data: [],
  title: ''
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string
  })),
  title: PropTypes.string
};

const ListLoading = withLoading(List);

export default fetchAPI(ListLoading);
