import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    justifyContent: "space-around",
    alignItems: "center",
  },
  raceContainer: {
    backgroundColor: "red",
    width: "85%",
  },
  row: {
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: "#383838",
    borderRadius: 15,
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
  },
  antDetails: {
    flexDirection: "column",
    width: "95%",
    height: 20,
    justifyContent: "center",
  },
  antDetailsHeader: {
    flexDirection: "row",
    width: "95%",
    height: 20,
    justifyContent: "center",
    marginVertical: 2,
  },
  antDetailsRow: {
    flexDirection: "row",
    width: "95%",
    height: 20,
    justifyContent: "space-around",
    marginVertical: 2,
  },
  name: {
    fontFamily: "Century Gothic",
    color: "white",
  },
  text: {
    fontFamily: "Century Gothic",
    color: "white",
  },
});
