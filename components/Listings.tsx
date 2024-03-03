import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { defaultStyles } from "@/constants/Style";

interface Props {
  listings: any[];
  catagory: string;
}

const Listings = ({ listings, catagory }: Props) => {
  useEffect(() => {
    console.log("RELOAD", listings.length);
  }, [catagory]);

  return (
    <View style={defaultStyles.container}>
      <FlatList />
    </View>
  );
};

export default Listings;
