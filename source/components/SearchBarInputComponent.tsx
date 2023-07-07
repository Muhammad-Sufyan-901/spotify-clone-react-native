import * as React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function SearchBarInputComponent(): JSX.Element {
  return (
    <View style={SearchBarInputComponentStyles.mainContainer}>
      <IonIcons
        name="search-outline"
        size={25}
        color="black"
      />

      <TextInput
        placeholder="Apa yang ingin kamu dengarkan?"
        placeholderTextColor="#4b5563"
        style={SearchBarInputComponentStyles.searchInput}
      />
    </View>
  );
}

const SearchBarInputComponentStyles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    marginHorizontal: 10,
    fontWeight: "700",
    fontSize: 15,
    flex: 1,
  },
});
