import { Divider, Text, View } from "native-base";
import React from "react";

const Summary = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: 244,
        width: "100%",
        padding: 12,
      }}
    >
      <View
        flex={1}
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          elevation: 5,
          flexDirection: "column",
        }}
        background={"#ADADAD"}
      >
        <View
          flex={1}
          style={{
            padding: 15,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"rgba(15, 25, 26, 0.5)"}
          >
            Total items
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"#000"}>
            4
          </Text>
        </View>
        <View
          flex={1}
          style={{
            padding: 15,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"rgba(15, 25, 26, 0.5)"}
          >
            Total amount
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"#000"}>
            ₹550
          </Text>
        </View>
        <View
          flex={1}
          style={{
            padding: 15,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"rgba(15, 25, 26, 0.5)"}
          >
            Discount
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"#2FBF71"}>
            -₹50
          </Text>
        </View>
        <View
          flex={1}
          style={{
            borderTopWidth: 1,
            borderColor: "rgba(15, 25, 26, 0.5)",
            borderStyle: "dashed",
            padding: 15,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"#E63946"}>
            GRAND TOTAL
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"#4361EE"}>
            ₹500
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Summary;
