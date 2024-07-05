import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { memo, useLayoutEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  interpolateColor,
} from 'react-native-reanimated';

import type { DataType } from './types';
interface ItemInterface {
  item: DataType;
  onItemPressed: (value: boolean, index: number) => void;
  index: number;
}
const Item = memo(
  ({ item, index, onItemPressed }: ItemInterface) => {
    const imageSize = useSharedValue<number>(0);
    const gap = useSharedValue<number>(0);
    useLayoutEffect(() => {
      gap.value = item.checked ? 4 : 0;
      imageSize.value = item.checked ? 16 : 0;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const animatedImageStyles = useAnimatedStyle(() => ({
      width: imageSize.value,
      height: imageSize.value,
    }));
    const animatedContainerStyles = useAnimatedStyle(() => ({
      gap: gap.value,
      backgroundColor: interpolateColor(
        gap.value,
        [0, 4],
        ['transparent', 'rgba(98,197,79,0.3)']
      ),
      borderColor: interpolateColor(
        gap.value,
        [0, 4],
        ['#000', 'rgba(98,197,79,0.9)']
      ),
    }));
    //   const [isCheck, setIsCheck] = useState<boolean>(item.checked);
    const handleOnPress = () => {
      if (item.checked) {
        gap.value = withDelay(500, withTiming(0));
        imageSize.value = withDelay(500, withTiming(0));

        //   setIsCheck(false);
        onItemPressed(false, index);
      } else {
        gap.value = withDelay(500, withTiming(4));
        imageSize.value = withDelay(500, withTiming(16));

        //   setIsCheck(true);
        onItemPressed(true, index);
      }
    };

    return (
      <TouchableOpacity onPress={handleOnPress} activeOpacity={0.5}>
        <Animated.View style={[styles.container, animatedContainerStyles]}>
          <Text style={styles.title}>{item.title}</Text>

          <Animated.Image
            source={{
              uri: 'https://cdn-icons-png.freepik.com/256/5610/5610944.png?semt=ais_hybrid',
            }}
            style={[styles.icon, animatedImageStyles]}
            resizeMode="contain"
          />
        </Animated.View>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    const value =
      prevProps.item.id === nextProps.item.id &&
      prevProps.item.title === nextProps.item.title &&
      prevProps.item.checked === nextProps.item.checked;
    return value;
  }
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 0,
    height: 0,
  },
  title: { color: '#eee', fontSize: 18, fontWeight: 'bold' },
});
export default Item;
