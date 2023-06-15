import React from 'react';
import { render } from '@testing-library/react-native';
import {
  SmallRedSpinner,
  LargeGreenSpinner,
  LargeBlueSpinnerNotAnimating,
} from './spinner.composition';

describe('spinner', () => {
  it('renders SmallRedSpinner', () => {
    const { getByTestId, getByText } = render(<SmallRedSpinner />);
    const spinner = getByTestId('spinner');
    expect(spinner.props.color).toEqual('red');
    expect(spinner.props.size).toEqual('small');
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('renders LargeGreenSpinner', () => {
    const { getByTestId, getByText } = render(<LargeGreenSpinner />);
    const spinner = getByTestId('spinner');
    expect(spinner.props.color).toEqual('green');
    expect(spinner.props.size).toEqual('large');
    expect(getByText('Processing...')).toBeTruthy();
  });

  it('renders LargeBlueSpinnerNotAnimating', () => {
    const { getByText } = render(<LargeBlueSpinnerNotAnimating />);
    expect(getByText('Complete')).toBeTruthy();
  });
});
