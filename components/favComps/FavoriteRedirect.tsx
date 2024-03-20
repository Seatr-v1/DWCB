//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

// create a component
const FavoriteRedirect = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "mon-light",
          fontSize: 19,
          color: "grey"
        }}
      >
        Log in to view Wish List
      </Text>
      <Link href={"/(modals)/login"} asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Log in</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontFamily: "mon-sb",
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: Colors.primary,
    width: 150,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: "mon-b",
  },
});

//make this component available to the app
export default FavoriteRedirect;
