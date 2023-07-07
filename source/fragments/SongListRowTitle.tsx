import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

type SongListRowTitleProps = {
  title: string;
};

export default function SongListRowTitle({ title }: SongListRowTitleProps): JSX.Element {
  return (
    <View style={SongListRowTitleStyles.textContainer}>
      <Text style={SongListRowTitleStyles.titleText}>{title}</Text>
    </View>
  );
}

const SongListRowTitleStyles = StyleSheet.create({
  textContainer: {
    marginVertical: 15,
  },
  titleText: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },
});
