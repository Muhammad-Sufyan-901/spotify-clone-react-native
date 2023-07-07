import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { PremiumBackground } from "../constants";

export default function PremiumJumbotronComponent(): JSX.Element {
  return (
    <ImageBackground
      source={PremiumBackground}
      style={PremiumJumbotronComponentStyles.mainContainer}
    >
      <View style={PremiumJumbotronComponentStyles.mainContainerOverlay} />

      <View style={PremiumJumbotronComponentStyles.jumbotronHeader}>
        <MaterialCommunityIcons
          name="spotify"
          size={20}
          color="white"
        />

        <Text style={PremiumJumbotronComponentStyles.jumbotronHeaderText}>Premium</Text>
      </View>

      <View style={PremiumJumbotronComponentStyles.jumbotronContentContainer}>
        <View style={PremiumJumbotronComponentStyles.jumbotronBadgeContainer}>
          <View style={PremiumJumbotronComponentStyles.jumbotronBadgeDot} />

          <Text style={PremiumJumbotronComponentStyles.jumbotronBadgeText}>Penawaran segera berakhir</Text>
        </View>

        <View>
          <Text style={PremiumJumbotronComponentStyles.jumbotronMainText}>Segera berakhir: 3 bulan Premium cuma Rp 54,990 dengan e-wallet dan pulsa</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const PremiumJumbotronComponentStyles = StyleSheet.create({
  mainContainer: {
    height: 400,
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    position: "relative",
  },
  mainContainerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  jumbotronHeader: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    position: "absolute",
    top: 4,
    left: 12,
  },
  jumbotronHeaderText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  jumbotronContentContainer: {
    position: "absolute",
    bottom: 16,
    paddingHorizontal: 15,
  },
  jumbotronBadgeContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  jumbotronBadgeDot: {
    backgroundColor: "#3b82f6",
    height: 8,
    width: 8,
    borderRadius: 50,
  },
  jumbotronBadgeText: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "500",
    fontSize: 10,
    letterSpacing: 2,
  },
  jumbotronMainText: {
    color: "white",
    fontWeight: "500",
    fontSize: 30,
  },
});
