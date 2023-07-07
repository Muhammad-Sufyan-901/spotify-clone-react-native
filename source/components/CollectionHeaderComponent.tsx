import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { profile } from "../constants";

export default function CollectionHeaderComponent(): JSX.Element {
  const { profileImage } = profile;

  return (
    <View style={CollectionHeaderComponentStyles.mainContainer}>
      <View style={CollectionHeaderComponentStyles.headerContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: profileImage }}
            style={CollectionHeaderComponentStyles.profileImage}
            alt="User Profile Picture"
          />
        </TouchableOpacity>

        <View style={CollectionHeaderComponentStyles.headerTextContainer}>
          <Text style={CollectionHeaderComponentStyles.headerTitle}>Koleksi Kamu</Text>
        </View>

        <View style={CollectionHeaderComponentStyles.callToActionButtonContainer}>
          <TouchableOpacity>
            <IonIcons
              name="search-outline"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="plus"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={CollectionHeaderComponentStyles.tabContainer}>
        <TouchableOpacity style={CollectionHeaderComponentStyles.tabItem}>
          <Text style={CollectionHeaderComponentStyles.tabItemText}>Playlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CollectionHeaderComponentStyles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 8,
    width: "100%",
    backgroundColor: "black",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTextContainer: {
    marginHorizontal: 15,
    flex: 1,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  callToActionButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  tabContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  tabItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: "#27272a",
  },
  tabItemText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});
