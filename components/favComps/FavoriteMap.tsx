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
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { Ionicons, AntDesign } from "@expo/vector-icons";

interface Props {
  listings: any[];
}

const FavoriteMap = ({ listings }: Props) => {

  const Favorite: ListRenderItem<any> = ({ item }) => {
    return (
      <SafeAreaView >
        <View style={styles.align}>
          <Link href={`/listing/${item.id}`}>
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
                <View style={styles.imageBox}>
                  <Image
                    source={require("../../assets/images/boston-chops-img.png")}
                    style={styles.image}
                  />
                  <View style={styles.text}>
                    <Text
                      style={{
                        fontFamily: "mon-sb",
                        fontSize: 16,
                        color: "black",
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "mon-sb",
                        fontSize: 10,
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
                          fontSize: 10,
                          marginLeft: 1,
                          color: "grey",
                        }}
                      >
                        {item.avgCost}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "mon-sb",
                          fontSize: 10,
                          marginLeft: 5,
                          color: "grey",
                        }}
                      >
                        •
                      </Text>
                      <Text
                        style={{
                          fontFamily: "mon-sb",
                          fontSize: 10,
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
                          fontSize: 10,
                          marginLeft: 2,
                          color: "grey",
                        }}
                      >
                        {`${item.review_score} (${item.number_of_reviews})`}
                      </Text>
                    </View>
                  </View>
                </View>
                <Ionicons
                  name="heart"
                  size={18}
                  color={"red"}
                  style={{ position: "absolute", right: 33 }}
                />
              </Animated.View>
            </TouchableOpacity>
          </Link>
          <Text style={styles.divider}></Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.align}>
      {listings.length > 0 ? (
        <FlatList renderItem={Favorite} data={listings} />
      ) : (
        <Text>No Restaurants Saved</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  listing: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 10,
    marginTop: 5,
  },
  divider: {
    height: 0.5,
    backgroundColor: "grey",
    width: Dimensions.get("window").width - 20,
    alignSelf: "center",
  },
  image: {
    width: 120,
    height: "70%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  text: {
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 12,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  imageBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export default FavoriteMap;
