import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { topRatingSongList } from "../constants";
import { SongListRowTitle, TopRatingSongCard } from "../fragments";

export default function TopRatingSongListComponent(): JSX.Element {
  return (
    <View style={TopRatingSongListComponentStyles.mainContainer}>
      <SongListRowTitle title="Tangga Lagu Unggulan" />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={TopRatingSongListComponentStyles.contentContainer}
        horizontal
      >
        {topRatingSongList.map(
          ({ thumbnailBanner, title, description, songs }, index): React.ReactNode => (
            <TopRatingSongCard
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

const TopRatingSongListComponentStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  contentContainer: {
    columnGap: 12,
  },
});
