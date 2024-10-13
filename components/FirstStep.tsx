import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { SlideInLeft, SlideOutLeft } from "react-native-reanimated";
import { CustomInput } from "./CustomInput";

const PREVIOUS_IN = SlideInLeft;
const PREVIOUS_OUT = SlideOutLeft;

export const FirstStep = () => {
  return (
    <Animated.View
      entering={PREVIOUS_IN}
      exiting={PREVIOUS_OUT}
      style={{ gap: 12 }}
    >
      <CustomInput label="Cardholder name" placeholder="Jon doe" />
      <CustomInput label="Card number" placeholder="4444 3333 2222 1111" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <View style={{ flex: 1 }}>
          <CustomInput label="Expiration date" placeholder="07 / 28" />
        </View>
        <View style={{ flex: 1 }}>
          <CustomInput label="CVV" placeholder="000" />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "500",
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 12,
  },
});
