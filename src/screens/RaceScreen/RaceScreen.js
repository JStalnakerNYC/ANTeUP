import React from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { styles } from "./RaceScreen.styles";
import { FlatButton } from "../../../components/FlatButtton/FlatButton";

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

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

const Item = ({ name, length, color, weight }) => (
  <View style={styles.row}>
    <View style={styles.antDetails}>
      <View style={styles.antDetailsHeader}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.antDetailsRow}>
        <Text style={styles.text}>length: {length}</Text>
        <Text style={styles.text}>color: {color}</Text>
        <Text style={styles.text}>weight: {weight}</Text>
      </View>
    </View>
  </View>
);

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//     <Text style={styles.title}>{id}</Text>
//   </View>
// );

export default function RaceScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Welcome");
  };
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      length={item.length}
      color={item.color}
      weight={item.weight}
    />
  );
  // const renderItem = ({ item }) => (
  //   <Item title={item.id} />
  // );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
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
