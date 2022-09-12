import { Center, View, Text, Icon } from "native-base";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";

const Item = ({ details }) => {
  const { itemname, price, qty, status, image, available } = details;
  return (
    <View
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
          borderWidth: available ? 1.5 : 2,
          overflow: "hidden",
          borderColor: available ? "rgba(249, 202, 65, 0.25)" : "#D90429",
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
          <Center borderRadius={6} flex={1} overflow={"hidden"}>
            {available ? (
              <></>
            ) : (
              <Center
                zIndex={20}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <Icon
                  color={"#fff"}
                  as={AntDesign}
                  name={"exclamationcircle"}
                  size={"2xl"}
                />
              </Center>
            )}
            <Image
              style={{
                resizeMode: "cover",
              }}
              source={image}
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
              style={{ fontSize: 20 }}
              fontWeight={"semibold"}
              color={"#0F191A"}
            >
              {itemname}
            </Text>
            <Text
              fontSize={"lg"}
              fontWeight={"bold"}
              color={"rgba(15, 25, 26, 0.5)"}
            >
              ₹{price}
            </Text>
          </View>
          <View
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            alignItems={"flex-end"}
            flex={1}
          >
            <View
              backgroundColor={
                !available
                  ? "rgba(217, 4, 41, 0.1)"
                  : status === "Being prepared"
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
                  !available
                    ? "#D90429"
                    : status === "Being prepared"
                    ? "#4361EE"
                    : status === "Served"
                    ? "#2FBF71"
                    : "#F9CA41"
                }
              >
                {available ? status : "Item unavailable"}
              </Text>
              {available ? (
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
              ) : (
                <></>
              )}
            </View>
            {available ? (
              <Text
                style={{ fontSize: 17 }}
                fontWeight={"normal"}
                color={"#E63946"}
              >
                Qty:
                <Text
                  style={{ fontSize: 17 }}
                  fontWeight={"bold"}
                  color={"#E63946"}
                >
                  {qty} Nos
                </Text>
              </Text>
            ) : (
              <Icon
                color={"#D90429"}
                as={AntDesign}
                name={"arrowright"}
                size="lg"
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Item;
