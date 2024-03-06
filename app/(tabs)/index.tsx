import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import ListingData from "@/constants/data/fake-listings.json";
import ListingDataGeo from "@/constants/data/fake-listings.geo.json";
import ListingMap from "@/components/ListingMap";

const Page = () => {
  const [catagory, setCatagory] = useState("Trending");
  const items = useMemo(() => ListingData as any, []);
  const onDataChanged = (catagory: string) => {
    setCatagory(catagory);
  };

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={items} category={catagory} /> */}
      <ListingMap listings={ListingDataGeo}/>
    </View>
  );
};

export default Page;
