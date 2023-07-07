import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import type { SongList } from "../types";

type RecommendationSongCardProps = SongList;

export default function RecommendationSongCard({ thumbnailBanner, title }: RecommendationSongCardProps): JSX.Element {
  return (
    <TouchableOpacity style={RecommendationSongCardStyles.cardBody}>
      <View style={RecommendationSongCardStyles.cardThumbnailContainer}>
        <Image
          source={{ uri: thumbnailBanner }}
          style={RecommendationSongCardStyles.cardThumbnail}
          alt="Recommendation Song Card Banner"
        />

        <View style={RecommendationSongCardStyles.cardThumbnailIcon}>
          <MaterialCommunityIcons
            name="spotify"
            size={15}
            color="white"
          />
        </View>
      </View>

      <View style={RecommendationSongCardStyles.cardTextContainer}>
        <Text
          numberOfLines={2}
          style={RecommendationSongCardStyles.cardTitle}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const RecommendationSongCardStyles = StyleSheet.create({
  cardBody: {
    backgroundColor: "transparent",
  },
  cardThumbnailContainer: {
    width: 175,
    height: 175,
    position: "relative",
  },
  cardThumbnail: {
    flex: 1,
  },
  cardThumbnailIcon: {
    position: "absolute",
    top: 4,
    left: 4,
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
