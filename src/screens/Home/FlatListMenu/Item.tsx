import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "../styles";
import { useTheme } from "../../../contexts/theme";

// Types
import { MenuItemType } from "../types";

const Item: React.VFC<{ item: MenuItemType }> = ({ item }) => {
  const navigation = useNavigation();
  const {
    state: { colors },
  } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(item.component as any)}>
      <View style={styles.itemContainer}>
        <Icon name={item.icon} size={22} color={colors.primary} />
        <Text
          style={StyleSheet.flatten([styles.itemName, { color: colors.text }])}>
          {item.name}
        </Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" size={22} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
