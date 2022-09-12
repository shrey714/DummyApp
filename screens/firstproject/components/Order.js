import { Center, View, Text, Icon, Pressable } from "native-base";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Order = ({ details }) => {
  const { title, amount, ID, status } = details;
  const native = useNavigation();
  return (
    <Pressable
      onPress={() => {
        native.navigate("PAGE2");
      }}
      style={{
        width: "100%",
        height: 92,
        paddingHorizontal: 12,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1.5,
          overflow: "hidden",
          borderColor: "#E63946",
          width: "100%",
          borderRadius: 8,
          height: 72,
          flexDirection: "row",
        }}
      >
        <View
          flex={1}
          style={{
            padding: 8,
          }}
        >
          <Center
            borderRadius={6}
            flex={1}
            background={"rgba(230, 57, 70, 0.1)"}
          >
            <Icon
              color="#E63946"
              as={MaterialCommunityIcons}
              name="glass-mug-variant"
              size="lg"
            />
          </Center>
        </View>
        <View
          flex={5}
          style={{
            padding: 8,
            paddingLeft: 0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            flex={1}
          >
            <Text
              style={{ fontSize: 22 }}
              fontWeight={"semibold"}
              color={"#0F191A"}
            >
              {title}
            </Text>
            <Text fontSize={"md"} fontWeight={"bold"} color={"#4361EE"}>
              Total: ₹{amount}
            </Text>
          </View>
          <View
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            alignItems={"flex-end"}
            flex={1}
          >
            <Text
              style={{ fontSize: 17 }}
              fontWeight={"semibold"}
              color={"#0F191A"}
            >
              ID:
              <Text
                style={{ fontSize: 17 }}
                fontWeight={"semibold"}
                color={"#E63946"}
              >
                {ID}
              </Text>
            </Text>
            <View
              backgroundColor={
                status === "Being prepared"
                  ? "rgba(67, 97, 238, 0.1)"
                  : status === "Served"
                  ? "rgba(47, 191, 113, 0.1)"
                  : "rgba(249, 202, 65, 0.1)"
              }
              style={{
                paddingVertical: 2,
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 4,
                borderRadius: 6,
              }}
            >
              <Text
                fontSize={"xs"}
                fontWeight={"semibold"}
                color={
                  status === "Being prepared"
                    ? "#4361EE"
                    : status === "Served"
                    ? "#2FBF71"
                    : "#F9CA41"
                }
              >
                {status}
              </Text>
              <Icon
                color={
                  status === "Being prepared"
                    ? "#4361EE"
                    : status === "Served"
                    ? "#2FBF71"
                    : "#F9CA41"
                }
                as={MaterialCommunityIcons}
                name={
                  status === "Being prepared"
                    ? "timer"
                    : status === "Served"
                    ? "check-circle"
                    : "timer-sand-empty"
                }
                size="xs"
              />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Order;
