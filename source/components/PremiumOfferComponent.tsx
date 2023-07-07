import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, PremiumAdvantageRow, PremiumOfferDescription } from "../fragments";
import { premiumAdvantagesList } from "../constants";

export default function PremiumOfferComponent(): JSX.Element {
  return (
    <View style={PremiumOfferComponentStyles.mainContainer}>
      <Button
        size="normal"
        type="primary"
        label="Dapatkan premium"
      />

      <PremiumOfferDescription />

      <View style={PremiumOfferComponentStyles.premiumAdvantagesContainer}>
        <Text style={PremiumOfferComponentStyles.premiumAdvantagesTitle}>Mengapa bergabung ke Premium?</Text>

        <View style={PremiumOfferComponentStyles.premiumAdvantagesListContainer}>
          {premiumAdvantagesList.map(
            (advantage, index): React.ReactNode => (
              <PremiumAdvantageRow
                key={`${advantage} - ${index}`}
                advantage={advantage}
              />
            )
          )}
        </View>
      </View>
    </View>
  );
}

const PremiumOfferComponentStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingTop: 4,
  },
  premiumAdvantagesContainer: {
    marginTop: 8,
    backgroundColor: "#27272a",
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 4,
  },
  premiumAdvantagesTitle: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    borderBottomColor: "#6b7280",
  },
  premiumAdvantagesListContainer: {
    marginVertical: 15,
    rowGap: 15,
  },
});
