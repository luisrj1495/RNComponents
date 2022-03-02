import React from "react";
import { SafeAreaView, Button, Alert } from "react-native";

import HeaderTitle from "../components/HeaderTitle";

/**
 *
 * @docs https://reactnative.dev/docs/alert
 */
const AlertsScreen = () => {
  const showAlert = () => {
    Alert.alert(
      "New Alert",
      "Im a message",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "destructive",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log("OnDismiss"),
      },
    );
  };

  const showPrompt = () => {
    // Only works on IOS
    Alert.prompt(
      "Im a prompt",
      "Im a description",
      value => {
        console.log({ value });
      },
      "login-password",
      "",
      "number-pad",
    );
  };
  return (
    <SafeAreaView>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <Button title="Mostrar prompt" onPress={showPrompt} />
    </SafeAreaView>
  );
};

export default AlertsScreen;
