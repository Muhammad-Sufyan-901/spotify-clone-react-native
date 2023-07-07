import * as React from "react";
import { StyleSheet, View } from "react-native";
import { profile } from "../constants";
import { AddArtistRow, AddPodcastRow, UserPlaylistHeader, UserPlaylistRow } from "../fragments";

export default function UsersPlaylistDisplayerComponent(): JSX.Element {
  const { playlists } = profile;

  return (
    <View style={UsersPlaylistDisplayerComponentStyles.mainContainer}>
      <UserPlaylistHeader />

      <View style={UsersPlaylistDisplayerComponentStyles.contentContainer}>
        {playlists.map(
          ({ thumbnail, name, creator, songs }, index): React.ReactNode => (
            <UserPlaylistRow
              key={`${name} - ${index}`}
              thumbnail={thumbnail}
              name={name}
              creator={creator}
              songs={songs}
            />
          )
        )}
      </View>

      <AddArtistRow />

      <AddPodcastRow />
    </View>
  );
}

const UsersPlaylistDisplayerComponentStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1,
    rowGap: 15,
  },
  contentContainer: {
    flex: 1,
    rowGap: 15,
  },
});
