import React, { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, SafeAreaView, Animated } from "react-native";
import { styles } from "./RaceScreen.styles";
import { FlatButton } from "../../../components/FlatButtton/FlatButton";

export default function RaceScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [status, updateStatus] = useState("Not yet run");

  const [hasRaceStarted, setHasRaceStarted] = useState(false);
  const [raceCompleted, setRaceCompleted] = useState(false);

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

  // useEffect(() => {
  //   sortUpdatedData();
  // }, [sortUpdatedData]);

  const fetchAnts = async () => {
    const response = await fetch("https://sg-ants-server.herokuapp.com/ants");
    const responseData = await response.json();
    responseData.ants.forEach((element) => {
      element.status = status;
    });
    setData(responseData.ants);
    setUpdatedData(responseData.ants);
    setLoading(false);
  };

  const handleSet = () => {
    fetchAnts();
    setField(true);
  };

  function generateAntWinLikelihoodCalculator() {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();

    return (callback) => {
      setTimeout(() => {
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  }

  const fetchAntWinLikelihood = (index) => {
    return new Promise(generateAntWinLikelihoodCalculator()).then(
      (resolved) => {
        setUpdatedData(
          (updatedData[index].status = Math.round(100 * resolved))
        );
      }
    );
  };

  const startRace = () => {
    for (let i = 0; i < data.length; i++) {
      fetchAntWinLikelihood(i);
      updatedData[i].status = "In progress";
    }
    setHasRaceStarted(true);
  };

  // const sortUpdatedData = () => {
  //   updatedData.sort((a, b) => {
  //     // console.log(a.updatedData.status);
  //     if (a.updatedData.status === "In progress") {
  //       hasRaceStarted = true;
  //       return 1;
  //     }
  //     return b.updatedData.status - a.updatedData.status;
  //   });
  // };

  const Item = ({ name, length, color, weight, status }) => (
    <View style={styles.row}>
      <View style={styles.antDetails}>
        <View style={styles.antDetailsHeader}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.status}>{status}</Text>
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
        status={item.status}
      />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Animated.View
          style={[styles.waitingTextContainer, { opacity: fadeAnimation }]}
        >
          <Text style={styles.alertText}>
            The racers are ready and waiting...
          </Text>
        </Animated.View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          extraData={updatedData}
        />
      )}
      {field ? (
        hasRaceStarted ? (
          <Text style={styles.alertText}>Race has started</Text>
        ) : (
          <FlatButton title="Start Race" onPress={startRace} />
        )
      ) : (
        <FlatButton title="Set Race" onPress={handleSet} />
      )}
    </SafeAreaView>
  );
}
