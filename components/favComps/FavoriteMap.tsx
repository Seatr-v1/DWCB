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
import { Ionicons } from "@expo/vector-icons";

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
                    color: "black",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "mon-sb",
                    fontSize: 12,
                    color: "grey",
                    marginLeft: 1,
                    marginTop: 5,
                  }}
                >
                  {item.address}
                </Text>
                <View style={styles.details}>
                  <Text
                    style={{
                      fontFamily: "mon-sb",
                      fontSize: 12,
                      marginLeft: 1,
                      color: "grey",
                    }}
                  >
                    {item.avgCost}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "mon-sb",
                      fontSize: 12,
                      marginLeft: 5,
                      color: "grey",
                    }}
                  >
                    •
                  </Text>
                  <Text
                    style={{
                      fontFamily: "mon-sb",
                      fontSize: 12,
                      marginLeft: 5,
                      color: "grey",
                    }}
                  >
                    {item.cuisine}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "mon-sb",
                      fontSize: 12,
                      marginLeft: 5,
                      color: "grey",
                    }}
                  >
                    •
                  </Text>
                  <Ionicons
                    style={{ marginLeft: 5, color: "grey" }}
                    name={"star"}
                    size={10}
                  />
                  <Text
                    style={{
                      fontFamily: "mon-sb",
                      fontSize: 12,
                      marginLeft: 2,
                      color: "grey",
                    }}
                  >
                    {`${item.review_score} (${item.number_of_reviews})`}
                  </Text>
                </View>
              </View>
              <Ionicons
                name="close"
                size={20}
                color={"grey"}
                style={{ marginLeft: 20, marginTop: 9 }}
              />
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
    justifyContent: "space-evenly",
    position: "relative",
    left: -8,
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
    // backgroundColor: "grey"
  },
  text: {
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "grey",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    marginTop: 5,
  },
});

export default FavoriteMap;
