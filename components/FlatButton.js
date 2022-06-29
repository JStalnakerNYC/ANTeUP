import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./FlatButtton/FlatButton.styles";

export const FlatButton = ({ title, onPress }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "light grey" : "grey",
        },
        styles.button,
      ]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
