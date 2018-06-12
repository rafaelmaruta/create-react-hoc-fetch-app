import React from 'react';
import { withLoading } from '../hocs/withLoading';
import { fetchAPI } from '../hocs/fetchAPI';

const apiURL = 'http://www.mocky.io/v2/5b1afc48330000b435fb161d';

const ReposList = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>Minha lista de favoritos:</li>
    <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    <li><a href="https://about.gitlab.com" target="_blank" rel="noopener noreferrer">GitLab</a></li>
  </ul>
);

export default fetchAPI(withLoading(ReposList))(apiURL);
