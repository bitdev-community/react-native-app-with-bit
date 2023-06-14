import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Spinner } from '@learnbit-react/react-native-expo.ui.spinner';

export default function App() {
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
