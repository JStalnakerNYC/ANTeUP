import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    justifyContent: "space-around",
    alignItems: "center",
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
    alignItems: "center",
  },
  antDetailsRow: {
    flexDirection: "row",
    width: "95%",
    height: 20,
    justifyContent: "space-between",
    marginVertical: 2,
  },
  name: {
    fontFamily: "Century Gothic Bold",
    color: "white",
    fontWeight: "bold",
  },
  status: {
    fontFamily: "Century Gothic",
    color: "white",
  },
  text: {
    fontFamily: "Century Gothic",
    color: "white",
  },
  alertText: {
    textAlign: "center",
    fontFamily: "Century Gothic Bold",
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  waitingTextContainer: {
    width: "85%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
});
