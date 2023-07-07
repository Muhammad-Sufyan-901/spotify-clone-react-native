import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function UserPlaylistHeader(): JSX.Element {
  return (
    <View style={UserPlaylistHeaderStyles.headerContainer}>
      <TouchableOpacity style={UserPlaylistHeaderStyles.headerSortingOption}>
        <MaterialCommunityIcons
          name="sort"
          size={20}
          color="white"
        />

        <Text style={UserPlaylistHeaderStyles.headerSortingOptiontext}>Terakhir</Text>
      </TouchableOpacity>

      <IonIcons
        name="qr-code"
        size={20}
        color="white"
      />
    </View>
  );
}

const UserPlaylistHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerSortingOption: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
  },
  headerSortingOptiontext: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});
