import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SearchHeaderComponent(): JSX.Element {
  return (
    <View style={SearchHeaderComponentStyles.mainContainer}>
      <Text style={SearchHeaderComponentStyles.titleText}>Cari</Text>

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="camera-outline"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const SearchHeaderComponentStyles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  titleText: {
    color: "white",
    fontWeight: "700",
    fontSize: 22,
  },
});
