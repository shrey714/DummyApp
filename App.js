import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./screens/firstproject/First";
import Second from "./screens/secondproject/Second";
import HomeScreen from "./HomeScreen";
import { store, persistor } from "./screens/secondproject/store";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen
                name="First"
                options={{ headerShown: false }}
                component={First}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Second"
                component={Second}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
