import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const { SCREEN_WIDTH, SCREEN_HEIGHT } = require("../../Utils/const");
const logo = require("../../assets/images/logo_white.png");
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
        <View
          style={{
            height: 50,
            width: SCREEN_WIDTH,
            backgroundColor: "#ccc",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{ height: 50, marginLeft: 16, justifyContent: "center" }}
          >
            <Text style={{ fontSize: 11, color: "#0e0e0e99" }}>
              Salam Tidjini
            </Text>
            <Text
              style={{ fontSize: 22, fontWeight: "bold", color: "#0e0e0e" }}
            >
              Bienvenue
            </Text>
          </View>
          <Icon name="search" size={36} />
        </View>
      </View>
    );
  }
}
