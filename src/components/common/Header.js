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
export default ({ primaryText, secondaryText, iconName }) => {
  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16
      }}
    >
      <View style={{ height: 50, justifyContent: "center" }}>
        <Text style={{ fontSize: 11, color: "#0e0e0e99" }}>
          {secondaryText}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#0e0e0e" }}>
          {primaryText}
        </Text>
      </View>
      <Icon name={iconName} size={32} color="#0e0e0e" />
    </View>
  );
};
