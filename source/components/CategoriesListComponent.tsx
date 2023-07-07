import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { categoryList } from "../constants";
import { CategoryCard } from "../fragments";

export default function CategoriesListComponent(): JSX.Element {
  return (
    <View style={CategoriesListComponentStyles.mainContainer}>
      <Text style={CategoriesListComponentStyles.titleText}>Browse semua</Text>

      <View style={CategoriesListComponentStyles.contentContainer}>
        {categoryList.map(
          ({ title, image, backgroundColor }, index): React.ReactNode => (
            <CategoryCard
              key={`${title} - ${index}`}
              title={title}
              image={image}
              backgroundColor={backgroundColor}
            />
          )
        )}
      </View>
    </View>
  );
}

const CategoriesListComponentStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titleText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 15,
  },
  contentContainer: {
    gap: 16,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
