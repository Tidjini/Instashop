import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import Header from "../components/common/Header";
import BigCard from "../components/bigCard";
import SmallCard from "../components/smallCard";

const { SCREEN_WIDTH, SCREEN_HEIGHT, IMAGES } = require("../../Utils/const");

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
        <ScrollView style={{ marginVertical: 5 }}>
          <BigCard
            imageUri={IMAGES[0]}
            option={"Special"}
            specialColor={colors.orange}
            mainText={"50% off on sunglasses"}
            discoverText={"Discover sunglasses >"}
          />
          <SmallCard
            imageUri={IMAGES[2]}
            option="Summwat"
            optionColor={colors.spaceCadet}
            mainTitle={"Summer Sale"}
            itemsIncluded="24 items included"
            offer="Limited offer"
          />

          <SmallCard
            imageUri={IMAGES[3]}
            option="Spinwat"
            optionColor={colors.jungleGreen}
            mainTitle={"Spring Sale"}
            itemsIncluded="5 items included"
            offer="Limited offer"
          />
          <BigCard
            imageUri={IMAGES[2]}
            option={"Special"}
            specialColor={colors.orange}
            mainText={"50% off on sunglasses"}
            discoverText={"Discover sunglasses >"}
          />
          <SmallCard
            imageUri={IMAGES[1]}
            option="Spinwat"
            optionColor={colors.jungleGreen}
            mainTitle={"Spring Sale"}
            itemsIncluded="5 items included"
            offer="Limited offer"
          />
        </ScrollView>
      </View>
    );
  }
}
