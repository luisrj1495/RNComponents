import React, { useRef } from "react";
import { View, StyleSheet, Animated, PanResponder } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  purpleBox: {
    backgroundColor: "red",
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

const Animation102 = () => {
  const cords = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: cords.x, dy: cords.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(cords, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[cords.getLayout(), styles.purpleBox]}
      />
    </View>
  );
};

export default Animation102;
