import { View, Text, Button, StyleSheet, Image } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import ListingData from "@/constants/data/fake-listings.json";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FavoriteMap from "@/components/favComps/FavoriteMap";
import FavoriteRedirect from "@/components/favComps/FavoriteRedirect";
import { Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Favorites = () => {
  const items = useMemo(() => ListingData as any, []);
  const tempData = [items[0], items[1], items[2]];
  // const { signOut, isSignedIn } = useAuth();
  const isSignedIn = true

  return (
    <View style={styles.container}  >
      <Stack.Screen
        options={{
          title: "",
        }}
      />
      <GestureHandlerRootView >
        {isSignedIn ? (
          <FavoriteMap listings={tempData} />
        ) : (
          <FavoriteRedirect />
        )}
      </GestureHandlerRootView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
})

export default Favorites;
