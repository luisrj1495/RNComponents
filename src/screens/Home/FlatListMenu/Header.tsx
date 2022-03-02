import React from "react";
import { Text, View } from "react-native";

import { styles } from "../styles";

const Header = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Lista de opciones</Text>
    </View>
  );
};

export default Header;
