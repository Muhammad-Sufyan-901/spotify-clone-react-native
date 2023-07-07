import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { recommendationSongList } from "../constants";
import { RecommendationSongCard, SongListRowTitle } from "../fragments";

export default function RecommedationSongListComponent(): JSX.Element {
  return (
    <View style={RecommedationSongListComponentStyles.mainContainer}>
      <SongListRowTitle title="Coba yang lain" />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={RecommedationSongListComponentStyles.contentContainer}
        horizontal
      >
        {recommendationSongList.map(
          ({ thumbnailBanner, title, description, songs }, index): React.ReactNode => (
            <RecommendationSongCard
              key={`${title} - ${index}`}
              thumbnailBanner={thumbnailBanner}
              title={title}
              description={description}
              songs={songs}
            />
          )
        )}
      </ScrollView>
    </View>
  );
}

const RecommedationSongListComponentStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  contentContainer: {
    columnGap: 12,
  },
});
