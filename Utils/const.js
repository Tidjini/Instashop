import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CARD_WIDTH_BIG = SCREEN_WIDTH - 50;
const CARD_HEIGHT_BIG = SCREEN_HEIGHT / 2;
const CARD_WIDTH_SMALL = CARD_WIDTH_BIG;
const CARD_HEIGHT_SMALL = CARD_HEIGHT_BIG / 2;

const IMAGES = [
  require("../assets/images/item-01.png"),
  require("../assets/images/item-02.png"),
  require("../assets/images/item-03.png"),
  require("../assets/images/item-04.png")
];
export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  CARD_WIDTH_BIG,
  CARD_HEIGHT_BIG,
  CARD_WIDTH_SMALL,
  CARD_HEIGHT_SMALL,
  IMAGES
};
