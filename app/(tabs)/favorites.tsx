import { View, Text, Button, StyleSheet, Image } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import ListingData from "@/constants/data/fake-listings.json";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FavoriteMap from "@/components/favComps/FavoriteMap";
import FavoriteRedirect from "@/components/favComps/FavoriteRedirect";
import { Stack } from "expo-router";






const Favorites = () => {
  const items = useMemo(() => ListingData as any, []);
  const tempData = [items[0], items[1], items[2]];
  const [signedIn, setSignedIn] = useState<boolean>(true)

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Wish List",
        }}
      />
      <GestureHandlerRootView>
        {signedIn ? <FavoriteMap listings={tempData} /> : <FavoriteRedirect />}
      </GestureHandlerRootView>
    </View>
  );
};

export default Favorites;
