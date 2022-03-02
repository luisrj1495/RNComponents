import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  separator: {
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    opacity: 0.4,
  },
  itemName: {
    fontSize: 18,
    marginLeft: 10,
    color: "black",
  },
});
