# react-native-reanimated-smooth-ui

`react-native-reanimated-smooth-ui` enhances user interactions with smooth, animated components powered by `react-native-reanimated`, perfect for creating engaging experience.

## Installation

```sh
npm install react-native-reanimated-smooth-ui
```

## Usage


```ts

import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CheckBoxInteractions, {
  type DataType,
} from 'react-native-reanimated-smooth-ui';

export default function App() {
  const [data, setData] = useState<Array<DataType>>([
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

  ]);
  const onItemPressed = (value: boolean, index: number) => {
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



```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
