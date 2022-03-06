import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useThemeColors } from "../contexts/theme";

const HeaderTitle = ({ title }) => {
  const { text } = useThemeColors();
  return (
    <View>
      <Text style={StyleSheet.flatten([styles.headerTitle, { color: text }])}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HeaderTitle;
