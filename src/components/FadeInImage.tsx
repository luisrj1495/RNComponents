import React, { useEffect } from "react";
import { ActivityIndicator, Animated, View } from "react-native";
import useAnimation from "../hooks/useAnimation";

type FadeInImagePropsType = {
  uri: string;
};

const FadeInImage: React.VFC<FadeInImagePropsType> = ({ uri }) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = React.useState(true);

  const onLoadEnd = () => {
    setIsLoading(false);
    fadeIn(1000);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          size={30}
          color="red"
        />
      )}

      <Animated.Image
        source={{ uri }}
        style={{ width: "100%", height: 300, opacity }}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
};

export default FadeInImage;
