import { type PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {}

const AppText = (props: PropsWithChildren<Props>) => {
  return <Text style={styles.text}>{props.children || 'Test'}</Text>;
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: { color: 'green' },
});

export default AppText;
