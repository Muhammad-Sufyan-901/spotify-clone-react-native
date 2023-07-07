import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import type { Podcast } from "../types";

type PodcastCardProps = Podcast;

export default function PodcastCard({ thumbnail, title, genre, hoster }: PodcastCardProps): JSX.Element {
  return (
    <TouchableOpacity style={PodcastCardStyles.cardBody}>
      <View style={PodcastCardStyles.cardThumbnailContainer}>
        <Image
          source={{ uri: thumbnail }}
          style={PodcastCardStyles.cardThumbnail}
          alt="Podcast Card Banner"
        />

        <View style={PodcastCardStyles.cardThumbnailIcon}>
          <MaterialCommunityIcons
            name="spotify"
            size={15}
            color="white"
          />
        </View>
      </View>

      <View style={PodcastCardStyles.cardTextContainer}>
        <Text
          numberOfLines={1}
          style={PodcastCardStyles.cardSubtitle}
        >
          {genre}
        </Text>
        <Text
          numberOfLines={1}
          style={PodcastCardStyles.cardTitle}
        >
          {title}
        </Text>
        <Text
          numberOfLines={2}
          style={PodcastCardStyles.cardDescription}
        >
          Acara · {hoster}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const PodcastCardStyles = StyleSheet.create({
  cardBody: {
    backgroundColor: "transparent",
  },
  cardThumbnailContainer: {
    width: 175,
    height: 175,
    position: "relative",
    borderRadius: 12,
  },
  cardThumbnail: {
    flex: 1,
    borderRadius: 12,
  },
  cardThumbnailIcon: {
    position: "absolute",
    top: 4,
    left: 4,
  },
  cardTextContainer: {
    marginVertical: 10,
    maxWidth: 175,
    rowGap: 8,
  },
  cardTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
  cardSubtitle: {
    color: "#1db954",
    fontWeight: "600",
    fontSize: 10,
  },
  cardDescription: {
    color: "#6b7280",
    fontWeight: "600",
    fontSize: 12,
  },
});
