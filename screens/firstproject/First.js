import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Page1 from "./Page1";
import Page2 from "./Page2";
const First = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      options={{
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen name="PAGE1" component={Page1} />
      <Stack.Screen name="PAGE2" component={Page2} />
    </Stack.Navigator>
  );
};

export default First;
