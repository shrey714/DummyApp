import { Button, Text, View } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeButton = () => {
  const native = useNavigation();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 80,
        padding: 8,
      }}
    >
      <Button
        onPress={() => {
          native.navigate("PAGE1");
        }}
        style={{
          elevation: 3,
          flex: 1,
          backgroundColor: "#E63946",
          borderRadius: 12,
        }}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"} color={"#fff"}>
          Go Home
        </Text>
      </Button>
    </View>
  );
};

export default HomeButton;
