// import * as React from 'react';

import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { type CheckBoxInteractionsItem } from 'react-native-reanimated-smooth-ui';
import { CheckBoxInteractions } from 'react-native-reanimated-smooth-ui';
export default function App() {
  const [data, setData] = useState<Array<CheckBoxInteractionsItem>>([
    {
      id: 1,
      title: 'Italian',
      checked: true,
    },
    {
      id: 2,
      title: 'Mexican',
      checked: false,
    },
    {
      id: 3,
      title: 'Chinese',
      checked: false,
    },
    {
      id: 4,
      title: 'Indian',
      checked: false,
    },
    {
      id: 5,
      title: 'Japanese',
      checked: false,
    },
    {
      id: 6,
      title: 'Greek',
      checked: false,
    },
    {
      id: 7,
      title: 'French',
      checked: false,
    },
    {
      id: 8,
      title: 'Spanish',
      checked: false,
    },
    {
      id: 9,
      title: 'Thai',
      checked: false,
    },
    {
      id: 10,
      title: 'Korean',
      checked: false,
    },
    {
      id: 11,
      title: 'Vietnamese',
      checked: false,
    },
    {
      id: 12,
      title: 'Turkish',
      checked: false,
    },
    {
      id: 13,
      title: 'Lebanese',
      checked: false,
    },
    {
      id: 14,
      title: 'Moroccan',
      checked: false,
    },
    {
      id: 15,
      title: 'Ethiopian',
      checked: false,
    },
    {
      id: 16,
      title: 'Brazilian',
      checked: false,
    },
    {
      id: 17,
      title: 'Argentinian',
      checked: false,
    },
    {
      id: 18,
      title: 'Cuban',
      checked: false,
    },
    {
      id: 19,
      title: 'Peruvian',
      checked: false,
    },
    {
      id: 20,
      title: 'Colombian',
      checked: false,
    },
    {
      id: 21,
      title: 'Jamaican',
      checked: false,
    },
    {
      id: 22,
      title: 'Russian',
      checked: false,
    },
    {
      id: 23,
      title: 'German',
      checked: false,
    },
    {
      id: 24,
      title: 'Polish',
      checked: false,
    },
    {
      id: 25,
      title: 'Hungarian',
      checked: false,
    },
    {
      id: 26,
      title: 'Swedish',
      checked: false,
    },
    {
      id: 27,
      title: 'Norwegian',
      checked: false,
    },
    {
      id: 28,
      title: 'Finnish',
      checked: false,
    },
    {
      id: 29,
      title: 'Danish',
      checked: false,
    },
    {
      id: 30,
      title: 'Belgian',
      checked: false,
    },
  ]);
  const onItemPressed = (value: boolean, index: number) => {
    console.log(value, index);
    const temp = [...data];
    if (temp.length && temp[index]) {
      temp[index].checked = value;
      setData(temp);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CheckBoxInteractions DATA={data} onItemPressed={onItemPressed} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31363F',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
