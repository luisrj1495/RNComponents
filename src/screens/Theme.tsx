import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import HeaderTitle from "../components/HeaderTitle";
import { useTheme } from "../contexts/theme";

const ThemeScreen = () => {
  const { state, actions } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Theme" />
      <View style={styles.themeContainer}>
        <TouchableOpacity
          onPress={() =>
            actions.setTheme(state.theme === "dark" ? "light" : "dark")
          }
          style={{
            backgroundColor: "blue",
            height: 40,
            width: 100,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            {" "}
            {state.theme}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginRight: 10,
  },
});

export default ThemeScreen;
