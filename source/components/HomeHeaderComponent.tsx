import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { greetUsers } from "../utils";

export default function HomeHeaderComponent(): JSX.Element {
  const greetingTextTemplate = greetUsers();

  return (
    <View style={HomeHeaderComponentStyles.mainContainer}>
      <Text style={HomeHeaderComponentStyles.greetingText}>{greetingTextTemplate}</Text>

      <View style={HomeHeaderComponentStyles.callToActionButtonsContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="bell-outline"
            size={27.5}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="history"
            size={27.5}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="cog-outline"
            size={27.5}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const HomeHeaderComponentStyles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  greetingText: {
    color: "white",
    fontWeight: "700",
    fontSize: 22,
  },
  callToActionButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
  },
});
