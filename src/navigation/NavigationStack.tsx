import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Animation101 from "../screens/Animation101";
import Animation102 from "../screens/Animation102";
import Switch from "../screens/Switch";
import Alerts from "../screens/Alerts";
import TextInput from "../screens/TextInput";
import PullRefresh from "../screens/PullRefresh";
import SectionList from "../screens/SectionList";
import ModalScreen from "../screens/Modal";
import InfiniteScroll from "../screens/InfiniteScroll";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="Switch" component={Switch} />
      <Stack.Screen name="Alerts" component={Alerts} />
      <Stack.Screen name="TextInput" component={TextInput} />
      <Stack.Screen name="PullRefresh" component={PullRefresh} />
      <Stack.Screen name="SectionList" component={SectionList} />
      <Stack.Screen name="Modal" component={ModalScreen} />
      <Stack.Screen name="InfiniteScroll" component={InfiniteScroll} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
