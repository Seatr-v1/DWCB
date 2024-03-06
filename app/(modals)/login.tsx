import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import Colors from "@/constants/Colors";
import { TextInput } from "react-native-gesture-handler";
import { defaultStyles } from "@/constants/Style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Login = () => {
  useWarmUpBrowser();

  return (
    <GestureHandlerRootView style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Phone number"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBlockColor: Colors.black,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.seperator}>or</Text>
        <View
          style={{
            flex: 1,
            borderBlockColor: Colors.black,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Fontisto name="email" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Countinue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="logo-facebook"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Countinue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="logo-google"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Countinue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Countinue with Email</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },
  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    fontFamily: "mon-sb",
    color: Colors.darkGray,
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.darkGray,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "mon-sb",
  },
});
