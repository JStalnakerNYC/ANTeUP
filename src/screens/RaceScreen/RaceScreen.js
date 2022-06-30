import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
  Animated,
} from "react-native";
import { styles } from "./RaceScreen.styles";
import { FlatButton } from "../../../components/FlatButtton/FlatButton";

export default function RaceScreen({ navigation }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [field, setField] = useState(false);
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnimation]);

  const fetchData = async () => {
    const response = await fetch("https://sg-ants-server.herokuapp.com/ants");
    const data = await response.json();
    setData(data.ants);
    setLoading(false);
  };

  const handleSet = () => {
    fetchData();
    setField(true);
  };

  //update the list based on the result of running the function on each iteration creating the probability

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const Item = ({ name, length, color, weight }) => (
    <View style={styles.row}>
      <View style={styles.antDetails}>
        <View style={styles.antDetailsHeader}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.antDetailsRow}>
          <Text style={styles.text}>length: {length}</Text>
          <Text style={styles.text}>color: {`${color}`.toLowerCase()}</Text>
          <Text style={styles.text}>weight: {weight}</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Animated.View style={{ opacity: fadeAnimation }}>
      <Item
        name={item.name}
        length={item.length}
        color={item.color}
        weight={item.weight}
      />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.waitingTextContainer}>
          <Text style={styles.waitingText}>
            The racers are ready and waiting...
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      )}
      {field ? null : <Button title="Set the field" onPress={handleSet} />}
      <FlatButton title="Start Race" onPress={() => {}} />
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
