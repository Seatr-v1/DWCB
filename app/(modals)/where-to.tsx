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

const Where = () => {
  const [openCard, setOpenCard] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const router = useRouter();
  const handleClearAll = () => {};

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
  footerText: {
    height: "100%",
    flexDirection: "column",
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: "mon-sb",
  },
});

export default Where;
