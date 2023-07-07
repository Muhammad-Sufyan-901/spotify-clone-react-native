import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import type { SongList } from "../types";

type TopRatingSongCardProps = SongList;

export default function TopRatingSongCard({ thumbnailBanner, title }: TopRatingSongCardProps): JSX.Element {
  return (
    <TouchableOpacity style={TopRatingSongCardStyles.cardBody}>
      <Image
        source={thumbnailBanner}
        style={TopRatingSongCardStyles.cardThumbnail}
        alt="Top Rating Song Card Banner"
      />

      <View style={TopRatingSongCardStyles.cardTextContainer}>
        <Text
          numberOfLines={2}
          style={TopRatingSongCardStyles.cardTitle}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const TopRatingSongCardStyles = StyleSheet.create({
  cardBody: {
    backgroundColor: "transparent",
  },
  cardThumbnail: {
    width: 175,
    height: 175,
  },
  cardTextContainer: {
    marginVertical: 10,
    maxWidth: 175,
  },
  cardTitle: {
    color: "#6b7280",
    fontWeight: "500",
    fontSize: 12,
  },
});
