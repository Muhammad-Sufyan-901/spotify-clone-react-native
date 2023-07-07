import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import type { GestureResponderEvent } from "react-native";

type ButtonProps = {
  size: "small" | "normal" | "large";
  type: "primary" | "outline-primary";
  label?: string;
  children?: string | number | React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function Button({ size, type, children, label, onPress }: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        ButtonStyles.buttonContainer,
        type === "primary" ? { backgroundColor: "white", borderWidth: 0, borderColor: "transparent" } : type === "outline-primary" ? { backgroundColor: "transparent", borderWidth: 1, borderColor: "white" } : {},
        size === "small" ? { paddingHorizontal: 14, paddingVertical: 6 } : size === "normal" ? { paddingHorizontal: 28, paddingVertical: 12 } : size === "large" ? { paddingHorizontal: 36, paddingVertical: 18 } : {},
      ]}
    >
      {children}

      <Text
        style={[
          ButtonStyles.buttonLabelText,
          type === "primary" ? { color: "black" } : type === "outline-primary" ? { color: "white" } : {},
          size === "small" ? { fontSize: 10 } : size === "normal" ? { fontSize: 15 } : size === "large" ? { fontSize: 20 } : {},
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const ButtonStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    alignSelf: "center",
  },
  buttonLabelText: {
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
