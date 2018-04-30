import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const { SCREEN_WIDTH, SCREEN_HEIGHT } = require("../../../Utils/const");

const colors = {
  juneBad: "#C5D86D",
  jungleGreen: "#1B998B",
  spaceCadet: "#2E294E",
  orange: "#F46036",
  red: "#D7263D"
};
export default ({ primaryText, iconOne, iconTwo, iconThree }) => {
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16
      }}
    >
      <Icon name={iconOne} size={32} color="#0e0e0e" />

      <View
        style={{
          height: 50,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#0e0e0e",
            marginLeft: 20
          }}
        >
          {primaryText}
        </Text>
        <Icon
          name="chevron-down"
          size={28}
          color="#0e0e0e"
          style={{ marginTop: 3 }}
        />
      </View>
      <View
        style={{
          height: 50,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Icon
          name={iconTwo}
          size={28}
          color="#0e0e0e"
          style={{ marginTop: 3 }}
        />
        <Icon
          name={iconThree}
          size={28}
          color="#0e0e0e"
          style={{ marginTop: 3 }}
        />
      </View>
    </View>
  );
};
