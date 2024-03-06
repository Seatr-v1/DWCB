import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { defaultStyles } from "@/constants/Style";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Profile = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="Log out" onPress={() => signOut()} />
      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <TouchableOpacity style={defaultStyles.btn}>
            <Text style={defaultStyles.btnText}>Log in</Text>
          </TouchableOpacity>
        </Link>
      )}
    </GestureHandlerRootView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
});
