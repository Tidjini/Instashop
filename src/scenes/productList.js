import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

import Header from "../components/common/Headert";
const { SCREEN_WIDTH, SCREEN_HEIGHT, IMAGES } = require("../../Utils/const");
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
      </View>
    );
  }
}
