import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HomeScreen, SearchScreen, CollectionScreen, PremiumScreen } from "./source/screens";

export type RootStackParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  CollectionScreen: undefined;
  PremiumScreen: undefined;
};

const RootBottomTabBarNavigator = createBottomTabNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootBottomTabBarNavigator.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            height: 60,
          },
          tabBarLabelStyle: {
            fontWeight: "600",
          },
        }}
      >
        <RootBottomTabBarNavigator.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Beranda",
            tabBarIcon: ({ color }): React.ReactNode => (
              <MaterialCommunityIcons
                name="home"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <RootBottomTabBarNavigator.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarLabel: "Cari",
            tabBarIcon: ({ color }): React.ReactNode => (
              <IonIcons
                name="search-outline"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <RootBottomTabBarNavigator.Screen
          name="CollectionScreen"
          component={CollectionScreen}
          options={{
            tabBarLabel: "Koleksi Kamu",
            tabBarIcon: ({ color }): React.ReactNode => (
              <MaterialIcons
                name="library-music"
                size={30}
                color={color}
              />
            ),
          }}
        />
        <RootBottomTabBarNavigator.Screen
          name="PremiumScreen"
          component={PremiumScreen}
          options={{
            tabBarLabel: "Premium",
            tabBarIcon: ({ color }): React.ReactNode => (
              <MaterialCommunityIcons
                name="spotify"
                size={30}
                color={color}
              />
            ),
          }}
        />
      </RootBottomTabBarNavigator.Navigator>

      <StatusBar
        style="light"
        backgroundColor="black"
      />
    </NavigationContainer>
  );
}
