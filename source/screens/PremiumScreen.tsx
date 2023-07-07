import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AccountStatusComponent, PremiumJumbotronComponent, PremiumOfferComponent } from "../components";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type PremiumScreenProps = {
  route: RouteProp<RootStackParamList, "PremiumScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

type HeaderOptions = StackNavigationOptions;

export default function PremiumScreen({ navigation }: PremiumScreenProps): JSX.Element {
  React.useLayoutEffect((): void => {
    const headerOptions: HeaderOptions = {
      headerShown: false,
    };

    navigation.setOptions(headerOptions);
  }, []);

  return (
    <SafeAreaView style={PremiumScreenStyles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PremiumJumbotronComponent />

        <PremiumOfferComponent />

        <AccountStatusComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

const PremiumScreenStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    flex: 1,
  },
});
