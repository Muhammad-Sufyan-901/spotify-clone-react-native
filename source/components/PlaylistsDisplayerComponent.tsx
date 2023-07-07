import * as React from "react";
import { View, StyleSheet } from "react-native";
import { playlistsList } from "../constants";
import { PlaylistCard } from "../fragments";

export default function PlaylistsDisplayerComponent(): JSX.Element {
  return (
    <View style={PlaylistsDisplayerComponentStyles.mainContainer}>
      <View style={PlaylistsDisplayerComponentStyles.contentContainer}>
        {playlistsList.map(
          ({ name, thumbnail, creator, songs }, index): React.ReactNode => (
            <PlaylistCard
              key={`${name} - ${index}`}
              name={name}
              thumbnail={thumbnail}
              creator={creator}
              songs={songs}
            />
          )
        )}
      </View>
    </View>
  );
}

const PlaylistsDisplayerComponentStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 15,
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
    columnGap: 12,
    maxHeight: 210,
    overflow: "scroll",
  },
});
