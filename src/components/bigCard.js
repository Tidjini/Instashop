import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { CARD_WIDTH_BIG, CARD_HEIGHT_BIG } = require("../../Utils/const");

const colors = {
  juneBad: "#C5D86D",
  jungleGreen: "#1B998B",
  spaceCadet: "#2E294E",
  orange: "#F46036",
  red: "#D7263D"
};
export default ({ imageUri, option, specialColor, mainText, discoverText }) => {
  return (
    <View
      style={{
        marginTop: 10,
        height: CARD_HEIGHT_BIG,
        width: CARD_WIDTH_BIG,
        alignSelf: "center",
        borderRadius: 10,
        position: "relative"
      }}
    >
      <Image
        source={imageUri}
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
          backgroundColor:
            option == "Special" ? specialColor : colors.jungleGreen
        }}
      >
        {option}
      </Text>

      <LinearGradient
        colors={["#00000000", "#00000080", "#000000EE"]}
        style={{
          width: CARD_WIDTH_BIG,
          height: CARD_HEIGHT_BIG / 2,
          position: "absolute",
          bottom: 0,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10
        }}
      >
        <Text
          style={{
            fontSize: 38,
            fontWeight: "bold",
            color: "#FFF",
            marginLeft: 16,
            marginTop: 16
          }}
        >
          {mainText}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: "#FFFFFFAA",
              marginLeft: 18,
              marginTop: 5
            }}
          >
            {discoverText}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
