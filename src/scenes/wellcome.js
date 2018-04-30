import React, { Component } from "react";

import { Text, View, Image } from "react-native";

const { SCREEN_WIDTH, SCREEN_HEIGHT } = require("../../Utils/const");
const logo = require("../../assets/images/logo_white.png");
const colors = {
  juneBad: "#C5D86D",
  jungleGreen: "#1B998B",
  spaceCadet: "#2E294E",
  orange: "#F46036",
  red: "#D7263D"
};

export default class Wellcome extends Component {
  render() {
    return (
      <View
        style={{
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
          flex: 1,
          backgroundColor: colors.orange
        }}
      >
        <View
          style={{
            position: "absolute",
            top: SCREEN_HEIGHT / 2 - 48,
            alignSelf: "center"
          }}
        >
          <Image
            source={logo}
            style={{
              width: 48,
              height: 48,
              alignSelf: "center"
            }}
          />
          <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>
            Instashop
          </Text>
        </View>
        <Text
          style={{
            color: "#FFF",
            fontSize: 10,
            fontWeight: "bold",
            position: "absolute",
            bottom: 10,
            alignSelf: "center"
          }}
        >
          Instashop. inc tous droit réserver copyright &copy;
        </Text>
      </View>
    );
  }
}
