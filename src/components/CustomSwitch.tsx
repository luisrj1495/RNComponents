import React, { useState } from "react";
import { View, Switch } from "react-native";

const SwitchScreen: React.VFC<{
  isOn: boolean;
}> = ({ isOn }) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View>
      <Switch
        trackColor={{ false: "#d9d9db", true: "#5856d6" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="red"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchScreen;
