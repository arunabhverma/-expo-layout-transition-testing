import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  LinearTransition,
} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Header = ({
  next,
  setNext,
}: {
  next: number;
  setNext: (val: number) => void;
}) => {
  const theme = useTheme();
  return (
    <Animated.View layout={LinearTransition} style={styles.container}>
      {next === 0 ? (
        <Animated.View layout={LinearTransition}>
          <Animated.View entering={FadeInLeft} exiting={FadeOutLeft}>
            <View>
              <Text style={[styles.buttonText, { color: theme.colors.text }]}>
                Add Card
              </Text>
            </View>
            <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
              <Text
                style={[styles.buttonSubText, { color: theme.colors.text }]}
              >
                Enter the card details
              </Text>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      ) : (
        <AnimatedPressable
          entering={FadeInRight}
          exiting={FadeOutRight}
          onPress={() => setNext(next === 0 ? 1 : 0)}
        >
          <Animated.View style={styles.animatedWrapper}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="chevron-left"
                size={24}
                color={theme.colors.text}
              />
              <Text style={[styles.buttonText, { color: theme.colors.text }]}>
                Back
              </Text>
            </View>
          </Animated.View>
        </AnimatedPressable>
      )}
      <AntDesign
        name="closecircle"
        size={24}
        color={theme.colors.text}
        style={{ opacity: 0.5 }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  buttonText: {
    fontSize: 22,
  },
  buttonSubText: {
    fontSize: 18,
    marginTop: 5,
    opacity: 0.5,
  },
  animatedWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
