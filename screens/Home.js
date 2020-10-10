import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { IconButton, Button } from "react-native-paper";
import { CameraComponent } from "../components/CameraComponent";

export const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Details");
  };

  const handleCameraPress = () => {
    navigation.navigate("CameraScreen");
  };

  return (
    <View style={styles.container}>
      <View>
        <StatusBar backgroundColor="#1769aa" barStyle="light-content " />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Scan Your Meter</Text>
      </View>
      <View>
        <IconButton
          icon="camera"
          color={"#2196f3"}
          size={100}
          onPress={handleCameraPress}
        />
      </View>
      <Button color="red" mode="outlined" onPress={handlePress}>
        Go to Details
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 130,
    height: 130,
  },
  text: {
    fontSize: 36,
    fontWeight: "600",
    fontFamily: "roboto-light",
  },
  textContainer: { position: "relative", top: 15 },
});
