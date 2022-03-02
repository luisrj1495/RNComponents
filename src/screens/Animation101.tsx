import React, { useEffect } from "react";
import { View, StyleSheet, Animated, Button } from "react-native";

import useAnimation from "../hooks/useAnimation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  purpleBox: {
    backgroundColor: "purple",
    width: 150,
    height: 150,
  },
  containerButtons: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

const Animation101 = () => {
  const { fadeIn, fadeOut, position, opacity, startMoving } = useAnimation();

  useEffect(() => {
    fadeIn();
    startMoving(-100);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={StyleSheet.flatten([
          styles.purpleBox,
          {
            opacity,
            transform: [
              {
                translateY: position,
              },
            ],
          },
        ])}
      />
      <View style={styles.containerButtons}>
        <Button
          title="Fade In"
          onPress={() => {
            fadeIn();
            startMoving(-1000, 1000);
          }}
          color="blue"
        />
        <Button title="Fade Out" onPress={fadeOut} color="black" />
      </View>
    </View>
  );
};

export default Animation101;
