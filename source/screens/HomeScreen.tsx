import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { HomeHeaderComponent, PlaylistsDisplayerComponent, PodcastListComponent, RecommendationSongListComponent, TopRatingSongListComponent } from "../components";
import { getRandomColor } from "../utils";
import type { RouteProp } from "@react-navigation/native";
import type { StackNavigationProp, StackNavigationOptions } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type HomeScreenProps = {
  route: RouteProp<RootStackParamList, "HomeScreen">;
  navigation: StackNavigationProp<RootStackParamList>;
};

type HeaderOptions = StackNavigationOptions;

export default function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  const randomColor: string = getRandomColor();

  React.useLayoutEffect((): void => {
    const headerOptions: HeaderOptions = {
      headerShown: false,
    };

    navigation.setOptions(headerOptions);
  }, []);

  return (
    <SafeAreaView style={HomeScreenStyles.mainContainer}>
      <LinearGradient
        colors={[randomColor, "#000", "#000", "#000", "#000", "#000"]}
        start={{ x: -0.1, y: 0.2 }}
        end={{ x: 1, y: 1 }}
        locations={[0.01, 0.2, 0.3, 1, 1, 1]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeHeaderComponent />

          <PlaylistsDisplayerComponent />

          <RecommendationSongListComponent />

          <TopRatingSongListComponent />

          <PodcastListComponent />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const HomeScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
});
