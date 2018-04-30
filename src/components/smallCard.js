import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { CARD_WIDTH_SMALL, CARD_HEIGHT_SMALL } = require("../../Utils/const");

const colors = {
  juneBad: "#C5D86D",
  jungleGreen: "#1B998B",
  spaceCadet: "#2E294E",
  orange: "#F46036",
  red: "#D7263D"
};

export default ({
  imageUri,
  option,
  optionColor,
  mainTitle,
  itemsIncluded,
  offer
}) => {
  return (
    <View
      style={{
        marginTop: 10,
        height: CARD_HEIGHT_SMALL,
        width: CARD_WIDTH_SMALL,
        alignSelf: "center",
        borderRadius: 10,
        position: "relative"
      }}
    >
      <Image
        source={imageUri}
        style={{
          height: CARD_HEIGHT_SMALL,
          width: CARD_WIDTH_SMALL,
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
          backgroundColor: optionColor
        }}
      >
        {option}
      </Text>
      <LinearGradient
        colors={["#00000000", "#00000080", "#000000EE"]}
        style={{
          width: CARD_WIDTH_SMALL,
          height: CARD_HEIGHT_SMALL - 30,
          position: "absolute",
          bottom: 0,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#FFF",
              marginLeft: 16,
              marginTop: 16
            }}
          >
            {mainTitle}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFFAA",
              marginLeft: 18,
              marginTop: -3
            }}
          >
            {itemsIncluded}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 7,
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 18
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#FFF"
                }}
              >
                Explore >
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 11,
                color: colors.juneBad
              }}
            >
              {offer}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
