import React from "react";
import { Pressable, Center, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Center flexDirection={"column"} flex={1}>
      <Pressable
        onPress={() => {
          navigation.navigate("First");
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 150,
          backgroundColor: "#ADADAD",
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          1
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Second");
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 150,
          backgroundColor: "#ADADAD",
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          2
        </Text>
      </Pressable>
    </Center>
  );
};

export default HomeScreen;
