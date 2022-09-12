import React, { useEffect } from "react";
import { View, ScrollView, Text, Divider } from "native-base";
import Summary from "./components/Summary";
import Item from "./components/Item";
import HomeButton from "./components/HomeButton";
const Page2 = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <>
            <Text
              alignSelf={"center"}
              style={{ fontSize: 22 }}
              fontWeight={"semibold"}
              color={"#000"}
            >
              Order 1
            </Text>
            <Text
              style={{ fontSize: 13 }}
              fontWeight={"semibold"}
              color={"#4361EE"}
            >
              Order ID: 123456789
            </Text>
          </>
        );
      },
      headerTitleAlign: "center",
    });
  }, []);
  return (
    <>
      <Summary />
      <Divider background={"rgba(15, 25, 26, 0.1)"} />
      <ScrollView backgroundColor={"#fff"} flex={1}>
        <View
          style={{
            paddingBottom: 80,
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Item
            details={{
              itemname: "Chicken Biriyani",
              price: 170,
              qty: 2,
              status: "Being prepared",
              image: require("./IMG.png"),
              available: true,
            }}
          />
          <Item
            details={{
              itemname: "Mutton Biriyani",
              price: 210,
              qty: 2,
              status: "Being prepared",
              image: require("./IMG.png"),
              available: false,
            }}
          />
          <Item
            details={{
              itemname: "Chicken Biriyani",
              price: 170,
              qty: 2,
              status: "Being prepared",
              image: require("./IMG.png"),
              available: true,
            }}
          />
                    <Item
            details={{
              itemname: "Mutton Biriyani",
              price: 210,
              qty: 2,
              status: "Being prepared",
              image: require("./IMG.png"),
              available: true,
            }}
          />
        </View>
      </ScrollView>
      <HomeButton />
    </>
  );
};

export default Page2;
