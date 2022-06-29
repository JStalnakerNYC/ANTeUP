import React from "react";
import { Text, View } from "react-native";
import { style } from "./RaceScreen.styles";
import { FlatButton } from "../../../components/FlatButton";

export default function RaceScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Welcome");
  };
  return (
    <View style={style.container}>
      <View style={style.raceContainer}>
        <Text>Hello</Text>
      </View>
      <FlatButton title="Start Race" onPress={handlePress} />
    </View>
  );
}

// function generateAntWinLikelihoodCalculator() {
//     const delay = 7000 + Math.random() * 7000;
//     const likelihoodOfAntWinning = Math.random();

//     return (callback) => {
//       setTimeout(() => {
//         callback(likelihoodOfAntWinning);
//       }, delay);
//     };
//   }
