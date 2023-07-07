import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoriesListComponent, SearchBarInputComponent, SearchHeaderComponent } from "../components";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type SearchScreenProps = {
  route: RouteProp<RootStackParamList, "SearchScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

type HeaderOptions = StackNavigationOptions;

export default function SearchScreen({ navigation }: SearchScreenProps): JSX.Element {
  React.useLayoutEffect((): void => {
    const headerOptions: HeaderOptions = {
      headerShown: false,
    };

    navigation.setOptions(headerOptions);
  }, []);

  return (
    <SafeAreaView style={SearchScreenStyles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
      >
        <SearchHeaderComponent />

        <SearchBarInputComponent />

        <CategoriesListComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

const SearchScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
});
