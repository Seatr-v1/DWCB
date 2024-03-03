import { View, Text } from "react-native";
import React, { useEffect } from "react";

interface Props {
  listings: any[];
  catagory: string;
}

const Listings = ({ listings, catagory }: Props) => {
  useEffect(() => {
    console.log("RELOAD");
  }, [catagory]);

  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
