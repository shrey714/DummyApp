import { Text, View } from "native-base";
import React from "react";

const Note = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: 83,
        width: "100%",
        padding: 12,
      }}
    >
      <View
        flex={1}
        style={{
          borderWidth: 3,
          borderColor: "#4361EE",
          backgroundColor: "rgba(67, 97, 238, 0.1)",
          borderStyle: "dashed",
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        background={"#ADADAD"}
      >
        <Text fontSize={"md"} fontWeight={"bold"} color={"#4361EE"}>
          Note:
        </Text>
        <Text fontSize={"md"} fontWeight={"bold"} color={"#000"}>
          Your order for the past 24 hrs
        </Text>
      </View>
    </View>
  );
};

export default Note;
