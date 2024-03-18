//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
import { defaultStyles } from "@/constants/Style";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

interface Props {
  listings: any[];
}
const FavoriteMap = ({ listings }: Props) => {
  const Favorite: ListRenderItem<any> = ({ item }) => {
    return (
      <View style={styles.align}>
        <Link style={styles.listing} href={`/listing/${item.id}`}>
          <TouchableOpacity
            onPress={() =>
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }
          >
            <Animated.View
              style={styles.listing}
              entering={FadeInRight}
              exiting={FadeOutLeft}
            >
              <Image
                source={require("../../assets/images/boston-chops-img.png")}
                style={styles.image}
              />
              <View style={styles.text}>
                <Text
                  style={{
                    fontFamily: "mon-sb",
                    fontSize: 20,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "mon-light",
                    fontSize: 11,
                    color: "grey",
                    marginLeft: 1,
                    marginTop: 3,
                  }}
                >
                  {item.address}
                </Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </Link>
        <Text style={styles.divider}></Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {listings.length > 0 ? (
        <FlatList renderItem={Favorite} data={listings} />
      ) : (
        <Text>No Restaurants Saved</Text>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  align: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listing: {
    display: "flex",
    flexDirection: "row",
    height: 150,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  divider: {
    height: 0.5,
    backgroundColor: "grey",
    width: Dimensions.get("window").width - 30,
  },
  image: {
    width: 125,
    height: "60%",
    borderRadius: 10,
    marginLeft: 15,
    resizeMode: "cover",
  },
  text: {
    marginTop: 10,
    height: "60%",
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default FavoriteMap;
