import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/common/Header";

const {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  CARD_WIDTH_BIG,
  CARD_HEIGHT_BIG
} = require("../../Utils/const");
const image = require("../../assets/images/item-01.png");
const colors = {
  juneBad: "#C5D86D",
  jungleGreen: "#1B998B",
  spaceCadet: "#2E294E",
  orange: "#F46036",
  red: "#D7263D"
};

export default class Main extends Component {
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
          primaryText="Bienvenue"
          secondaryText="Salam Tidjini"
          iconName="search"
        />

        <View
          style={{
            height: CARD_HEIGHT_BIG,
            width: CARD_WIDTH_BIG,
            backgroundColor: "#ccc",
            alignSelf: "center",
            borderRadius: 10,
            position: "relative"
          }}
        >
          <Image
            source={image}
            style={{
              height: CARD_HEIGHT_BIG,
              width: CARD_WIDTH_BIG,
              resizeMode: "cover",
              borderRadius: 10
            }}
          />
          <Text
            style={{
              position: "absolute",
              paddingVertical: 5,
              paddingHorizontal: 7,
              borderRadius: 5,
              margin: 16,
              fontSize: 12,
              fontWeight: "bold",
              color: "#FFF",
              backgroundColor: colors.orange
            }}
          >
            Special
          </Text>

          <LinearGradient
            colors={["#00000000", "#000000DD", "#000000"]}
            style={{
              width: CARD_WIDTH_BIG,
              height: CARD_HEIGHT_BIG / 2,
              position: "absolute",
              bottom: 0
            }}
          >
            <Text>50% off on sunglasses</Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
}
