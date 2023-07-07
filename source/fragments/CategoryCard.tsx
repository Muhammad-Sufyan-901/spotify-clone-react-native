import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import type { Category } from "../types";

type CategoryCardProps = Category;

export default function CategoryCard({ title, image, backgroundColor }: CategoryCardProps): JSX.Element {
  return (
    <TouchableOpacity style={[CategoryCardStyles.cardBody, { backgroundColor }]}>
      <View style={CategoryCardStyles.cardTextContainer}>
        <Text
          numberOfLines={2}
          style={CategoryCardStyles.cardTitle}
        >
          {title}
        </Text>
      </View>

      <Image
        source={{ uri: image }}
        style={CategoryCardStyles.cardImage}
        alt="Category Card Image"
      />
    </TouchableOpacity>
  );
}

const CategoryCardStyles = StyleSheet.create({
  cardBody: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 4,
    width: "47.5%",
    height: 100,
    overflow: "hidden",
    flexDirection: "row",
    position: "relative",
  },
  cardTextContainer: {
    maxWidth: "50%",
  },
  cardTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    position: "absolute",
    bottom: -15,
    right: -10,
    transform: [{ rotate: "45deg" }],
  },
});
