import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  ActivityIndicatorProps,
  StyleSheet,
} from 'react-native';

export type SpinnerProps = {
  /**
   * The text to display underneath the spinner.
   */
  text?: string;
  /**
   * The color of the spinner.
   */
  color?: ActivityIndicatorProps['color'];
  /**
   * The size of the spinner.
   * @default 'large'
   * @see https://reactnative.dev/docs/activityindicator#size
   */
  size?: ActivityIndicatorProps['size'];

  /**
   * Determines whether the spinner is animating.
   * @default true
   * @see https://reactnative.dev/docs/activityindicator#animating
   */
  animating?: ActivityIndicatorProps['animating'];
};

const style = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function Spinner({ text, color, size, animating = true }: SpinnerProps) {
  return (
    <SafeAreaView>
      <ActivityIndicator
        style={style.spinner}
        testID="spinner"
        color={color}
        size={size}
        animating={animating}
      />
      <Text>{text}</Text>
    </SafeAreaView>
  );
}
