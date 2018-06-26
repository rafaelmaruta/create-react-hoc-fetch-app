import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../hocs/fetchAPI';
import { withLoading } from '../hocs/withLoading';

@fetchAPI
@withLoading
class List extends PureComponent {
  static defaultProps = {
    data: [],
    title: ''
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string
    })),
    title: PropTypes.string
  };

  render () {
    const { data, title } = this.props;

    return (
      <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
        <li>{title}</li>
        {data.map(({ id, name, url }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
