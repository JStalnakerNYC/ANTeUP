import React from "react";
import { StyleSheet, Pressable, Alert, Text, View } from "react-native";

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

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    padding: 6,
    height: 50,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Century Gothic",
  },
});
