import { View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

const Page = () => {
  const [catagory, setCatagory] = useState("Trending");
  const onDataChanged = (catagory: string) => {
    console.log("CHANGEd", catagory);
    setCatagory(catagory);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCatagoryChanged={onDataChanged} />,
        }}
      />
      <Listings listings={[]} catagory={catagory} />
      {/* <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/where-to"}>Where To?</Link>
      <Link href={"/listing/1334"}>Listing</Link> */}
    </View>
  );
};

export default Page;
