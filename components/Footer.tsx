import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  LinearTransition,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import { Button } from "@/components/Button";

export const Footer = ({
  next,
  setNext,
}: {
  next: number;
  setNext: (val: number) => void;
}) => {
  const theme = useTheme();
  return (
    <Animated.View layout={LinearTransition} style={{ padding: 16 }}>
      <Button
        onPress={() => setNext(next === 0 ? 1 : 0)}
        style={[styles.buttonStyle, { backgroundColor: theme.colors.primary }]}
      >
        {next === 0 ? (
          <>
            <Animated.Text
              entering={ZoomIn.duration(150)}
              exiting={ZoomOut.duration(150)}
              style={[{ color: "#fff" }, styles.loginText]}
            >
              Next
            </Animated.Text>
          </>
        ) : (
          <Animated.Text
            entering={ZoomIn.duration(150)}
            exiting={ZoomOut.duration(150)}
            style={[{ color: "#fff" }, styles.loginText]}
          >
            Add
          </Animated.Text>
        )}
      </Button>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
