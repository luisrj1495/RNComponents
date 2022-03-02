import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";

import Header from "./FlatListMenu/Header";
import Item from "./FlatListMenu/Item";
import Divider from "./FlatListMenu/Divider";

import { styles } from "./styles";

const menuItems = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    component: "Animation101",
  },
  {
    name: "Animation 102",
    icon: "albums-outline",
    component: "Animation102",
  },
  {
    name: "Switch",
    icon: "albums-outline",
    component: "Switch",
  },
  {
    name: "Alerts",
    icon: "alert-circle-outline",
    component: "Alerts",
  },
  {
    name: "TextInput",
    icon: "planet-outline",
    component: "TextInput",
  },
  {
    name: "PullRefresh",
    icon: "refresh-outline",
    component: "PullRefresh",
  },
  {
    name: "SectionList",
    icon: "list-outline",
    component: "SectionList",
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "Modal",
  },
  {
    name: "InfiniteScroll",
    icon: "copy-outline",
    component: "InfiniteScroll",
  },

  
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        ItemSeparatorComponent={() => <Divider />}
        data={menuItems}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default Home;
