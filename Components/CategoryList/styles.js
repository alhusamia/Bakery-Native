import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 215,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 20,
    opacity: 0.8,
    backgroundColor: "#BDC3C7",
  },
  Photo: {
    width: "100%",
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,   
    
  },
  Name: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    marginTop: 8,
    textShadowColor: "#000000",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
});
export default styles;
