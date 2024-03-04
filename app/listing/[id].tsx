import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Share,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import listingData from "@/constants/data/fake-listings.json";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  FadeInDown,
  SlideInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Style";

const IMG_HEIGHT = 300;
const { width } = Dimensions.get("window");

const Listing = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  //temp before backend is set up
  const listing = (listingData as any[]).find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          source={require("../../assets/images/boston-chops-img.png")}
          style={styles.image}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.primaryText}>{listing.name}</Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons name="star" size={16} color={Colors.darkGray} />
            <Text style={styles.ratings}>{listing.review_score} · </Text>
            <Text style={styles.reviews}>
              {listing.number_of_reviews} reviews
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.location}>{listing.address}</Text>
          </View>

          <View style={styles.divider} />

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.ad}>Booked 350+ times on the Seatr app</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.summary}>{listing.summary}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.rareFind}>
            <FontAwesome name="diamond" size={36} color={Colors.primary} />
            <Text style={styles.summary}>
              This is a rare find {listing.name} is usually more expensive
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.secondaryText}>What this place offers</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.summary}>{listing.summary}</Text>
          </View>
        </View>
      </Animated.ScrollView>

      <Animated.View
        style={defaultStyles.footer}
        entering={FadeInDown.duration(500)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.footerText}>
            <Text style={styles.footerPrice}>$ {listing.price}</Text>
            <Text>+$100 Dining credit</Text>
          </View>
          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 20 }]}
          >
            <Text style={defaultStyles.btnText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    height: IMG_HEIGHT,
    width: width,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: Colors.white,
  },
  primaryText: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "mon-sb",
    marginBottom: 10,
  },
  secondaryText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "mon-sb",
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: "mon-sb",
    color: Colors.darkGray,
  },
  ratings: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: Colors.darkGray,
  },
  reviews: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: Colors.darkGray,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: Colors.darkGray,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.darkGray,
    marginVertical: 16,
  },
  ad: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: Colors.primary,
  },
  summary: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: Colors.darkGray,
    lineHeight: 20,
    marginTop: 10,
    marginRight: 40,
  },
  rareFind: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginRight: 16,
  },
  footerText: {
    height: "100%",
    flexDirection: "column",
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: "mon-sb",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primary,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  header: {
    backgroundColor: "#fff",
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.darkGray,
  },

  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "mon",
  },
});

export default Listing;
