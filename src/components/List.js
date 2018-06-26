import React from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../hocs/fetchAPI';
import { withLoading } from '../hocs/withLoading';
import { compose } from 'recompose';

const List = ({ data, title }) => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>{title}</li>
    {data.map(({ id, name, url }) => (
      <li key={id}>
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
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

export default compose(fetchAPI, withLoading)(List);
