import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PremiumOfferDescription(): JSX.Element {
  return (
    <View style={PremiumOfferDescriptionStyles.offerDescriptionContainer}>
      <Text style={PremiumOfferDescriptionStyles.offerDescriptionText}>
        Hanya Rp 54,990/bulan sesudahnya.
        <Text style={PremiumOfferDescriptionStyles.conditionAndTermsText}> Persyaratan dan ketentuan berlaku. </Text>
        Tawaran tidak tersedia untuk pengguna yang pernah mencoba ke premium. Tawaran berakhir 16/06/23.
      </Text>
    </View>
  );
}

const PremiumOfferDescriptionStyles = StyleSheet.create({
  offerDescriptionContainer: {
    marginVertical: 8,
  },
  offerDescriptionText: {
    color: "#9ca3af",
    fontWeight: "600",
    fontSize: 11,
  },
  conditionAndTermsText: {
    color: "white",
    fontWeight: "600",
    fontSize: 11,
    marginHorizontal: 2,
  },
});
