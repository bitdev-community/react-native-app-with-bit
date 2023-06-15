import { Spinner } from './spinner';

export const SmallRedSpinner = () => (
  <Spinner size="small" color="red" text="Loading..." />
);

export const LargeGreenSpinner = () => (
  <Spinner size="large" color="green" text="Processing..." />
);

export const LargeBlueSpinnerNotAnimating = () => (
  <Spinner size="large" color="blue" text="Complete" animating={false} />
);
