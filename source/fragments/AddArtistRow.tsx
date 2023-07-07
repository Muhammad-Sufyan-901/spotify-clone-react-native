import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AddArtistRow(): JSX.Element {
  return (
    <TouchableOpacity style={AddArtistRowStyles.rowContainer}>
      <View style={AddArtistRowStyles.rowIconContainer}>
        <MaterialCommunityIcons
          name="plus"
          size={35}
          color="#a1a1aa"
        />
      </View>

      <View style={AddArtistRowStyles.rowTextContainer}>
        <Text
          numberOfLines={1}
          style={AddArtistRowStyles.rowTitleText}
        >
          Tambahkan artis
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const AddArtistRowStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowIconContainer: {
    height: 75,
    width: 75,
    backgroundColor: "#27272a",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  rowTextContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  rowTitleText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
});
