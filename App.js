import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import RaceScreen from "./src/screens/RaceScreen/RaceScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    "Century Gothic": require("./assets/fonts/CenturyGothic.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: "grey",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Century Gothic",
          },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Screen
          name="Race"
          component={RaceScreen}
          options={{ animation: "fade" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
