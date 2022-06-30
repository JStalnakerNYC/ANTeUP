import React, { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Animated } from "react-native";
import { FlatButton } from "../../../components/FlatButtton/FlatButton";
import { styles } from "./WelcomeScreen.styles";

export default function WelcomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Race");
  };

  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const leftDotMovement = useRef(new Animated.Value(-300)).current;
  const rightDotMovement = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnimation]);

  useEffect(() => {
    Animated.timing(leftDotMovement, {
      toValue: 400,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }, [leftDotMovement]);

  useEffect(() => {
    Animated.timing(rightDotMovement, {
      toValue: -300,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }, [rightDotMovement]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Animated.View
          style={{
            transform: [{ translateX: rightDotMovement }],
          }}
        >
          <Ionicons name="ellipse-sharp" size={10} color="black" />
        </Animated.View>
        <Animated.Text style={[styles.title, { opacity: fadeAnimation }]}>
          (Ant)eUP
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{ translateX: leftDotMovement }],
          }}
        >
          <Ionicons name="ellipse-sharp" size={10} color="black" />
        </Animated.View>
      </View>
      <FlatButton title="Enter Race" onPress={handlePress} />
    </View>
  );
}
