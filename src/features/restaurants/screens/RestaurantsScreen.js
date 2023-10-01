import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfo";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  padding: 16px;
  background-color: green;
`;

const RestaurantList = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: purple;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>

      <RestaurantList>
        <RestaurantInfo />
      </RestaurantList>
    </SafeArea>
  );
};

export default RestaurantsScreen;
