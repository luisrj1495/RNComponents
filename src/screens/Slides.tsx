import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ImageSourcePropType,
  Dimensions,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/Ionicons";

import HeaderTitle from "../components/HeaderTitle";
import useAnimation from "../hooks/useAnimation";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../assets/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../assets/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../assets/slide-3.png"),
  },
];

const screen = Dimensions.get("window");

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animation = useAnimation();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Slides" />

      <Carousel
        onSnapToItem={index => {
          setCurrentIndex(index);
          if (index == items.length - 1) animation.fadeIn(1000);
        }}
        layout="default"
        itemWidth={screen.width}
        sliderWidth={screen.width}
        data={items}
        renderItem={props => (
          <View
            style={{
              flex: 1,
              borderRadius: 5,
              padding: 40,
              justifyContent: "center",
            }}>
            <Image
              source={props.item.img}
              style={{ width: 350, height: 400, resizeMode: "center" }}
            />
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.description}>{props.item.desc}</Text>
          </View>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          alignItems: "center",
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={currentIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: "#5856d6",
          }}
        />

        <Animated.View style={{ opacity: animation.opacity }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home" as any)}
            activeOpacity={0.9}
            style={{
              flexDirection: "row",
              backgroundColor: "#5856d6",
              width: 100,
              height: 40,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text
              style={{
                color: "white",
              }}>
              Enter
            </Text>
            <Icon name="chevron-forward-outline" size={20} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5856d6",
  },
  description: {
    fontSize: 16,
    fontWeight: "300",
  },
});

export default Slides;
