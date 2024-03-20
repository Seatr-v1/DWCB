//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ListRenderItem,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface Props {
  listings: any[];
}
let color;
const FavoriteMap = ({ listings }: Props) => {
  const [reservationTab, setReservationTab] = useState<boolean>(true);

  const Favorite: ListRenderItem<any> = ({ item }) => {
    return (
      <SafeAreaView>
        <Animated.View
          style={styles.align}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
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
                        fontSize: 18,
                        color: Colors.black,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "mon-sb",
                        fontSize: 12,
                        color: Colors.darkGray,
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
                          color: Colors.darkGray,
                        }}
                      >
                        {item.avgCost}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "mon-sb",
                          fontSize: 12,
                          marginLeft: 5,
                          color: Colors.darkGray,
                        }}
                      >
                        •
                      </Text>
                      <Text
                        style={{
                          fontFamily: "mon-sb",
                          fontSize: 12,
                          marginLeft: 5,
                          color: Colors.darkGray,
                        }}
                      >
                        {item.cuisine}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "mon-sb",
                          fontSize: 12,
                          marginLeft: 5,
                          color: Colors.darkGray,
                        }}
                      >
                        •
                      </Text>
                      <Ionicons
                        style={{ marginLeft: 5, color: Colors.darkGray }}
                        name={"star"}
                        size={12}
                      />
                      <Text
                        style={{
                          fontFamily: "mon-sb",
                          fontSize: 12,
                          marginLeft: 2,
                          color: Colors.darkGray,
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
        </Animated.View>
      </SafeAreaView>
    );
  };

  const Reservations: ListRenderItem<any> = ({ item }) => {
    return (
      <SafeAreaView>
        <Animated.View
          style={styles.align}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
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
                        fontSize: 18,
                        color: Colors.black,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "mon-sb",
                        fontSize: 12,
                        color: Colors.darkGray,
                        marginLeft: 1,
                        marginTop: 5,
                      }}
                    >
                      {item.address}
                    </Text>
                    <View style={styles.details}>
                      <AntDesign
                        style={{ marginLeft: 1, color: Colors.darkGray }}
                        name={"calendar"}
                        size={12}
                      />

                      <Text
                        style={{
                          fontFamily: "mon-sb",
                          fontSize: 12,
                          marginLeft: 2,
                          color: Colors.darkGray,
                        }}
                      >
                        {"3/27 7:00pm"}
                      </Text>
                      <AntDesign
                        style={{ marginLeft: 8, color: Colors.darkGray }}
                        name={"user"}
                        size={12}
                      />

                      <Text
                        style={{
                          fontFamily: "mon-sb",
                          fontSize: 12,
                          marginLeft: 2,
                          color: Colors.darkGray,
                        }}
                      >
                        {"2"}
                      </Text>
                    </View>
                  </View>
                </View>
                <Link href={"/(modals)/login"} asChild>
                  <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText}>Modify</Text>
                  </TouchableOpacity>
                </Link>
              </Animated.View>
            </TouchableOpacity>
          </Link>
          <Text style={styles.divider}></Text>
        </Animated.View>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.align}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={{
            width: "50%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderBottomColor: reservationTab ? Colors.black : Colors.darkGray,
            borderBottomWidth: reservationTab ? 2 : 0.3,
          }}
          onPress={() => setReservationTab(true)}
          activeOpacity={1}
        >
          <Text style={reservationTab ? styles.black : styles.grey}>
            My Reservations
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "50%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderBottomColor: !reservationTab ? Colors.black : Colors.darkGray,
            borderBottomWidth: !reservationTab ? 2 : 0.3,
          }}
          onPress={() => setReservationTab(false)}
          activeOpacity={1}
        >
          <Text style={!reservationTab ? styles.black : styles.grey}>
            Wish List
          </Text>
        </TouchableOpacity>
      </View>
      {!reservationTab ? (
        <FlatList renderItem={Favorite} data={listings} />
      ) : (
        <FlatList renderItem={Reservations} data={listings} />
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
    backgroundColor: Colors.white,
  },
  listing: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 10,
    marginTop: 11,
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
  },
  divider: {
    height: 0.5,
    backgroundColor: Colors.darkGray,
    width: Dimensions.get("window").width - 20,
    alignSelf: "center",
  },
  image: {
    width: 120,
    height: "80%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  text: {
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  imageBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  black: {
    color: Colors.black,
    fontFamily: "mon-b",
  },
  grey: {
    color: Colors.darkGray,
    fontFamily: "mon-sb",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontFamily: "mon-sb",
    backgroundColor: Colors.white,
  },
  btn2: {
    backgroundColor: Colors.primary,
    width: 70,
    height: 35,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
    position: "absolute",
    right: -2,
  },
  btnText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: "mon-b",
  },
});

export default FavoriteMap;
