import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CARD_WIDTH_BIG = SCREEN_WIDTH - 50;
const CARD_HEIGHT_BIG = SCREEN_HEIGHT / 2;

export { SCREEN_WIDTH, SCREEN_HEIGHT, CARD_WIDTH_BIG, CARD_HEIGHT_BIG };
