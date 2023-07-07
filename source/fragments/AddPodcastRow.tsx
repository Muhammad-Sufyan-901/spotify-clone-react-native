import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AddPodcastRow(): JSX.Element {
  return (
    <TouchableOpacity style={AddPodcastRowStyles.rowContainer}>
      <View style={AddPodcastRowStyles.rowIconContainer}>
        <MaterialCommunityIcons
          name="plus"
          size={35}
          color="#a1a1aa"
        />
      </View>

      <View style={AddPodcastRowStyles.rowTextContainer}>
        <Text
          numberOfLines={1}
          style={AddPodcastRowStyles.rowTitleText}
        >
          Tambahkan podcast & acara
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const AddPodcastRowStyles = StyleSheet.create({
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
    borderRadius: 4,
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
