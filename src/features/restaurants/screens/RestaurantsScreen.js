import React from "react";
import { SafeAreaView, View, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantInfoComponent";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
