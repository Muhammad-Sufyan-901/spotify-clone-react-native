import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import type { Playlist } from "../types";

type PlaylistRowProps = Playlist;

export default function UserPlaylistRow({ thumbnail, name, creator }: PlaylistRowProps): JSX.Element {
  return (
    <TouchableOpacity style={UserPlaylistRowStyles.rowContainer}>
      <Image
        source={{ uri: thumbnail }}
        style={UserPlaylistRowStyles.rowThumbnailImage}
        alt="Playlist Image Thumbnail"
      />

      <View style={UserPlaylistRowStyles.rowTextContainer}>
        <Text
          numberOfLines={1}
          style={UserPlaylistRowStyles.rowTitleText}
        >
          {name}
        </Text>
        <Text
          numberOfLines={1}
          style={UserPlaylistRowStyles.rowSubtitleText}
        >
          Playlist · {creator}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const UserPlaylistRowStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 75,
  },
  rowThumbnailImage: {
    height: 75,
    width: 75,
  },
  rowTextContainer: {
    paddingHorizontal: 15,
    rowGap: 2,
    flex: 1,
  },
  rowTitleText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
  rowSubtitleText: {
    color: "#6b7280",
    fontWeight: "600",
    fontSize: 12.5,
  },
});
