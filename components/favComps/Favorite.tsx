//import liraries
import { defaultStyles } from "@/constants/Style";
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";

// create a component
const Favorite = ({ listing }:any) => {
  return (
    <View>
      <Link href={`/listing/${listing.id}`} asChild style={styles.container}>
        <Text>My Component</Text>
      </Link>
      <Text style={styles.divider}></Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: 150,
    width: Dimensions.get("window").width,
    backgroundColor: "green",
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    width: Dimensions.get("window").width - 50,
  },
});

//make this component available to the app
export default Favorite;
