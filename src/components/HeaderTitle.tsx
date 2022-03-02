import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderTitle = ({ title }) => {
  return (
    <View>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
});

export default HeaderTitle;
