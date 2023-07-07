import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";
import { CollectionHeaderComponent, UsersPlaylistDisplayerComponent } from "../components";

type CollectionScreenProps = {
  route: RouteProp<RootStackParamList, "CollectionScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

type HeaderOptions = StackNavigationOptions;

export default function CollectionScreen({ navigation }: CollectionScreenProps): JSX.Element {
  React.useLayoutEffect((): void => {
    const headerOptions: HeaderOptions = {
      headerShown: false,
    };

    navigation.setOptions(headerOptions);
  }, []);

  return (
    <SafeAreaView style={CollectionScreenStyles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <CollectionHeaderComponent />

        <UsersPlaylistDisplayerComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

const CollectionScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  profileImageContainer: {
    marginLeft: 15,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  callToActionButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    marginRight: 15,
  },
});
