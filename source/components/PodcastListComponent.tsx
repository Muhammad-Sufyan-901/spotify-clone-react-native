import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { podcastList } from "../constants";
import { SongListRowTitle, PodcastCard } from "../fragments";

export default function PodcastListComponent(): JSX.Element {
  return (
    <View style={PodcastListComponentStyles.mainContainer}>
      <SongListRowTitle title="Podcast asli & ekslusif Spotify" />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={PodcastListComponentStyles.contentContainer}
        horizontal
      >
        {podcastList.map(
          ({ thumbnail, title, hoster, genre }, index): React.ReactNode => (
            <PodcastCard
              key={`${title} - ${index}`}
              thumbnail={thumbnail}
              title={title}
              genre={genre}
              hoster={hoster}
            />
          )
        )}
      </ScrollView>
    </View>
  );
}

const PodcastListComponentStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  contentContainer: {
    columnGap: 12,
  },
});
