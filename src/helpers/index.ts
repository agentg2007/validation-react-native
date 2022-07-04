import _ from "lodash";
import { StyleProp, StyleSheet } from "react-native";

export const mergeStyles = <T>(...styles: StyleProp<T>[]) => {
    return StyleSheet.compose({}, styles);
}