import React, { useEffect } from "react";
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
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/reducer/index.reducer";
import { useNavigation } from "@react-navigation/native";
import data from "./Data";

const Items = ({ navigation }) => {
  const native = useNavigation();
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          style={{
            backgroundColor: "#ADADAD",
          }}
          onPress={() => {
            native.navigate("cart");
          }}
        >
          <Icon color="#000" as={AntDesign} name="shoppingcart" size="lg" />
        </Button>
      ),
    });
  }, []);

  return (
    <ScrollView backgroundColor={"#fff"} flex={1}>
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {data.products.map((item, index) => (
          <View
            key={index}
            style={{
              width: "50%",
              height: 220,
              padding: 14,
            }}
          >
            <View
              flex={1}
              style={{
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View
                zIndex={10}
                style={{
                  width: "100%",
                  padding: 8,
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
              <View flex={4} background={"#3e3e3e"}>
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
              <Pressable
                onPress={() => {
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                    })
                  );
                  toast.show({
                    description: "Item Added To Cart",
                  });
                }}
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
                background={"#ADADAD"}
              >
                <Text fontSize={"lg"} color={"#900"} fontWeight={"bold"}>
                  Add To Cart
                </Text>
              </Pressable>
            </View>
            <Center width={"100%"}>
              <Text
                numberOfLines={1}
                fontSize={"lg"}
                color={"#000"}
                fontWeight={"bold"}
              >
                {item.price} ₹
              </Text>
            </Center>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Items;
