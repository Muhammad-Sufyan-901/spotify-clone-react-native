import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type PremiumAdvantageRowProps = {
  advantage: string;
};

export default function PremiumAdvantageRow({ advantage }: PremiumAdvantageRowProps): JSX.Element {
  return (
    <View style={PremiumAdvantageRowStyles.rowContainer}>
      <MaterialCommunityIcons
        name="check"
        size={20}
        color="#15803d"
      />

      <View style={PremiumAdvantageRowStyles.rowTextContainer}>
        <Text style={PremiumAdvantageRowStyles.rowTitleText}>{advantage}</Text>
      </View>
    </View>
  );
}

const PremiumAdvantageRowStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  rowTextContainer: {
    maxWidth: "90%",
  },
  rowTitleText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});
