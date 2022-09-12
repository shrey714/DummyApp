import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Items from "./Items";
import Cart from "./Cart";
const Second = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name="items" component={Items} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
  );
};

export default Second;
