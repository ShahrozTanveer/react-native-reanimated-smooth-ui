// import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import AppText from 'react-native-reanimated-smooth-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <AppText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
