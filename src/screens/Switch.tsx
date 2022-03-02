import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import HeaderTitle from "../components/HeaderTitle";

import CustomSwitch from "../components/CustomSwitch";

const SwitchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Switches" />
      <CustomSwitch isOn={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SwitchScreen;
