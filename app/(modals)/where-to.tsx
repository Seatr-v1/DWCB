import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { defaultStyles } from "@/constants/Style";
import Animated, { SlideInDown } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const AminatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Where = () => {
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const router = useRouter();
  const handleClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BlurView intensity={70} tint="light" style={styles.container}>
        <Text>Where</Text>
      </BlurView>

      {/* FOOTER */}
      <Animated.View style={defaultStyles.footer} entering={SlideInDown}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={handleClearAll}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "mon-sb",
                textDecorationLine: "underline",
              }}
            >
              Clear all
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
            onPress={() => router.back()}
          >
            <Ionicons
              name="search-outline"
              size={24}
              style={defaultStyles.btnIcon}
              color={Colors.white}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  searchSection: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    marginBottom: 16,
  },
  searchIcon: {
    padding: 10,
  },
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
  },
  placesContainer: {
    flexDirection: "row",
    gap: 25,
  },
  place: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  placeSelected: {
    borderColor: Colors.darkGray,
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.darkGray,
  },
  previewdData: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.darkGray,
  },

  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.darkGray,
  },
});

export default Where;
