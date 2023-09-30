import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>

      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "purple",
  },
});

export default RestaurantsScreen;
