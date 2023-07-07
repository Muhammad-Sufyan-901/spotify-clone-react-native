import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import type { Playlist } from "../types";

type PlaylistCardProps = Playlist;

export default function PlaylistCard({ name, thumbnail }: PlaylistCardProps): JSX.Element {
  return (
    <TouchableOpacity style={PlaylistCardStyles.cardBody}>
      <Image
        source={{ uri: thumbnail }}
        style={PlaylistCardStyles.cardThumbnail}
        alt="Playlist Thumbnail"
      />

      <View style={PlaylistCardStyles.cardTextContainer}>
        <Text
          numberOfLines={2}
          style={PlaylistCardStyles.cardTitle}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const PlaylistCardStyles = StyleSheet.create({
  cardBody: {
    flex: 1,
    minWidth: 170,
    maxWidth: 210,
    maxHeight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111",
    overflow: "hidden",
    borderRadius: 4,
  },
  cardThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  cardTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
});
