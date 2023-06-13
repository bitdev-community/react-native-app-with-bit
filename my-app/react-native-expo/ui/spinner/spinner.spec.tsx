import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicSpinner } from './spinner.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSpinner />);
  const rendered = getByText('hello from Spinner');
  expect(rendered).toBeTruthy();
});
