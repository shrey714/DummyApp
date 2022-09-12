import React, { useEffect } from "react";
import { View, ScrollView } from "native-base";
import Note from "./components/Note";
import Order from "./components/Order";
const Page1 = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "order details",
      headerTitleAlign: "center",
    });
  }, []);
  return (
    <>
      <Note />
      <ScrollView backgroundColor={"#fff"} flex={1}>
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Order
            details={{
              title: "Order 1",
              amount: 500,
              ID: 1234567890,
              status: "Being prepared",
            }}
          />
          <Order
            details={{
              title: "Order 2",
              amount: 220,
              ID: 1234567890,
              status: "Served",
            }}
          />
          <Order
            details={{
              title: "Order 3",
              amount: 220,
              ID: 1234567890,
              status: "Confirmation Pending",
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Page1;
