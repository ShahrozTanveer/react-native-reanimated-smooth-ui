// import React from 'react';
import type { DataType } from './types';
import Item from './Item';
import { ScrollView, StyleSheet, View } from 'react-native';
// const icon = require('../assets/check.png');
interface CheckBoxInteractionsInterface {
  DATA: Array<DataType>;
  onItemPressed: (value: boolean, index: number) => void;
}
const CheckBoxInteractions = ({
  DATA,
  onItemPressed,
}: CheckBoxInteractionsInterface) => {
  //   return (
  //     <FlatList
  //       columnWrapperStyle={styles.col}
  //       scrollEventThrottle={1900}
  //       numColumns={3}
  //       contentContainerStyle={{gap: 4}}
  //       //   contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', gap: 8}}
  //       data={DATA}
  //       keyExtractor={(_, index: number) => index.toString()}
  //       renderItem={({item}) => <Item item={item} />}
  //     />
  //   );

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
