// import React from 'react';
import type { CheckBoxInteractionsProps } from './types';
import Item from './Item';
import { ScrollView, StyleSheet, View } from 'react-native';
// const icon = require('../assets/check.png');

const CheckBoxInteractions = ({
  DATA,
  onItemPressed,
}: CheckBoxInteractionsProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {DATA.map((item, index) => {
          return (
            <Item
              item={item}
              key={`${item.id}`}
              index={index}
              onItemPressed={onItemPressed}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  col: {
    flexWrap: 'wrap',
    gap: 4,
  },
});
export default CheckBoxInteractions;
