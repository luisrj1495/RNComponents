import React from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import HeaderTitle from "../components/HeaderTitle";

const TextInputScreen = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <HeaderTitle title="TextInput" />

            <View style={{ marginHorizontal: 20 }}>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                autoCorrect={false}
                autoCapitalize="words"
              />

              <HeaderTitle title="TextInput" />
              <HeaderTitle title="TextInput" />
              <HeaderTitle title="TextInput" />
              <HeaderTitle title="TextInput" />
              <HeaderTitle title="TextInput" />
              <HeaderTitle title="TextInput" />
              <HeaderTitle title="TextInput" />
              <HeaderTitle title="TextInput" />
              <HeaderTitle title="TextInput" />

              <TextInput
                style={styles.input}
                placeholder="Ingrese su telefono"
                autoCorrect={false}
                keyboardType="numeric"
                keyboardAppearance="dark"
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 4,
    height: 50,
    paddingHorizontal: 10,
    borderColor: "rgba(0,0,0,0.4)",
    marginVertical: 10,
  },
});

export default TextInputScreen;
