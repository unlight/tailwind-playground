import { render } from '@testing-library/react';
import React from 'react';

import { App } from './App';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Home');
  console.log('linkElement', linkElement);
  expect(linkElement).toBeTruthy();
});
