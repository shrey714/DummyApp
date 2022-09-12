import React from "react";
import {
  Button,
  Icon,
  useToast,
  Pressable,
  ScrollView,
  Text,
  View,
  Center,
} from "native-base";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "./redux/reducer/index.reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Image, ImageEditor } from "react-native";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const Summary = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return (
      <View
        style={{
          height: 60,
          backgroundColor: "#ADADAD",
          padding: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingRight: 5,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Text fontSize={"lg"} color={"#900"} fontWeight={"bold"}>
            Amount of {totalQuantity} items =
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 5,
              paddingVertical: 2,
              borderRadius: 5,
            }}
          >
            <Text fontSize={"lg"} color={"#900"} fontWeight={"bold"}>
              {totalPrice} ₹
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView backgroundColor={"#fff"} flex={1}>
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          {cart.map((item, index) => (
            <View
              key={item.id}
              style={{
                width: "100%",
                height: 140,
                padding: 14,
              }}
            >
              <View
                flex={1}
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  flexDirection: "row",
                }}
              >
                <View flex={1} background={"#3e3e3e"}>
                  <View
                    zIndex={11}
                    style={{
                      padding: 10,
                      width: 40,
                      height: 40,
                      position: "absolute",
                      backgroundColor: "rgba(0,0,0,1)",
                      borderTopRightRadius: 10,
                      alignSelf: "flex-start",
                      bottom: 0,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      fontSize={"lg"}
                      color={"#fff"}
                      fontWeight={"bold"}
                      numberOfLines={1}
                    >
                      {item.quantity}
                    </Text>
                  </View>
                  <View
                    zIndex={10}
                    style={{
                      width: "100%",
                      paddingVertical: 8,
                      paddingHorizontal: 3,
                      alignItems: "center",
                      position: "absolute",
                      backgroundColor: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <Text
                      fontSize={"lg"}
                      color={"#fff"}
                      fontWeight={"bold"}
                      numberOfLines={1}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{
                      resizeMode: "stretch",
                      height: 200,
                    }}
                  />
                </View>
                <View
                  flex={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  background={"#ADADAD"}
                  flexDirection={"column"}
                >
                  <View width={"100%"} flexDirection={"row"} flex={3}>
                    <Pressable
                      onPress={() => dispatch(decrementQuantity(item.id))}
                      flex={1}
                    >
                      <Center flex={1}>
                        <Icon
                          color="#fff"
                          as={AntDesign}
                          name="minus"
                          size="2xl"
                        />
                      </Center>
                    </Pressable>
                    <Center flex={1} backgroundColor={"#000"}>
                      <Text
                        numberOfLines={1}
                        fontSize={"2xl"}
                        color={"#fff"}
                        fontWeight={"bold"}
                      >
                        {item.price}
                      </Text>
                    </Center>
                    <Pressable
                      onPress={() => dispatch(incrementQuantity(item.id))}
                      flex={1}
                    >
                      <Center flex={1}>
                        <Icon
                          color="#fff"
                          as={AntDesign}
                          name="plus"
                          size="2xl"
                        />
                      </Center>
                    </Pressable>
                  </View>
                  <Pressable
                    onPress={() => dispatch(removeItem(item.id))}
                    width={"100%"}
                    flex={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    background={"#900"}
                  >
                    <Icon
                      color="#fff"
                      as={AntDesign}
                      name="delete"
                      size="2xl"
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Summary />
    </>
  );
};

export default Cart;
