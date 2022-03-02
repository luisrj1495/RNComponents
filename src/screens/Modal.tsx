import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Modal,
  View,
  Text,
} from "react-native";

import HeaderTitle from "../components/HeaderTitle";

const ModalScreen = () => {
  const [show, setShow] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Modal" />
      <Button title="Open modal" onPress={() => setShow(true)} />

      <Modal
        animationType="fade"
        visible={show}
        transparent
        statusBarTranslucent
        onRequestClose={() => {
          setShow(false);
        }}>
        <View
          style={{
            marginVertical: 40,
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            // justifyContent: "flex-end",
            justifyContent: "center",
            alignItems: "center",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            elevation: 4,
          }}>
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
            <HeaderTitle title="Modal Title" />
            <Text>Cuerpo</Text>

            <Button title="Close" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ModalScreen;
