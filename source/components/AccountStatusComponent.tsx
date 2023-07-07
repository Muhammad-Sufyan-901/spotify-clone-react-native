import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AccountStatusComponent(): JSX.Element {
  return (
    <View style={AccountStatusComponentStyles.mainContainer}>
      <Text style={AccountStatusComponentStyles.spotifyStatusText}>Spotify Free</Text>
      <Text style={AccountStatusComponentStyles.recentPackagesText}>Paket saat ini</Text>
    </View>
  );
}

const AccountStatusComponentStyles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    marginVertical: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 4,
    backgroundColor: "#27272a",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  spotifyStatusText: {
    color: "white",
    fontWeight: "500",
    fontSize: 17.5,
  },
  recentPackagesText: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
