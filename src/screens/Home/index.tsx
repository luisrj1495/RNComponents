import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import Header from "./FlatListMenu/Header";
import Item from "./FlatListMenu/Item";
import Divider from "./FlatListMenu/Divider";

import { styles } from "./styles";

import { menuItems } from "../../utils/menus";

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
