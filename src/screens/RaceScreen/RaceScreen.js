import React from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { styles } from "./RaceScreen.styles";
import { FlatButton } from "../../../components/FlatButton";

const DATA = [
  { name: "Marie ‘Ant’oinette", length: 12, color: "BLACK", weight: 2 },
  { name: "Flamin’ Pincers", length: 11, color: "RED", weight: 2 },
  { name: "Big Susan", length: 20, color: "BLACK", weight: 5 },
  {
    name: "The Unbeareable Lightness of Being",
    length: 5,
    color: "SILVER",
    weight: 1,
  },
  { name: "‘The Duke’", length: 17, color: "RED", weight: 3 },
];

const Ant = ({ name, length, color, weight }) => (
  <View style={styles.item}>
    <Text style={styles.header}>{name}</Text>
    <Text style={styles.header}>{length}</Text>
    <Text style={styles.header}>{color}</Text>
    <Text style={styles.header}>{weight}</Text>
  </View>
);

console.log(DATA[0]);

export default function RaceScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Welcome");
  };
  const renderItem = ({ item }) => <Ant title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FlatButton title="Start Race" onPress={handlePress} />
    </SafeAreaView>
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
