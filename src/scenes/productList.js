import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import Header from "../components/common/Headert";
const {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PRODUCT_CARD_WIDTH,
  PRODUCT_CARD_HEIGHT,
  IMAGES
} = require("../../Utils/const");
const colors = {
  juneBad: "#C5D86D",
  jungleGreen: "#1B998B",
  spaceCadet: "#2E294E",
  orange: "#F46036",
  red: "#D7263D"
};

export default class ProducList extends Component {
  render() {
    return (
      <View
        style={{
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
          flex: 1
        }}
      >
        <Header
          primaryText="Footwear"
          iconOne="arrow-left"
          iconTwo="search"
          iconThree="gear"
        />

        <ScrollView
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10
          }}
        >
          <View
            style={{
              marginTop: 5,
              width: PRODUCT_CARD_WIDTH,
              height: PRODUCT_CARD_HEIGHT,
              backgroundColor: "#ccc",
              position: "relative"
            }}
          >
            <View
              style={{
                marginTop: 5,
                width: PRODUCT_CARD_WIDTH,
                height: PRODUCT_CARD_HEIGHT,
                backgroundColor: "#ccc",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={IMAGES[0]}
                style={{
                  height: PRODUCT_CARD_HEIGHT - 50,
                  width: PRODUCT_CARD_WIDTH - 50,
                  resizeMode: "cover"
                }}
              />
            </View>

            <Text
              style={{
                position: "absolute",
                paddingVertical: 3,
                paddingHorizontal: 10,
                borderRadius: 5,
                left: 10,
                top: 15,

                fontSize: 10,
                color: "#FFF",
                backgroundColor: colors.orange
              }}
            >
              Deal
            </Text>

            <Icon
              name="heart"
              size={32}
              color="#0e0e0e88"
              style={{ position: "absolute", right: 10, top: 10 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
