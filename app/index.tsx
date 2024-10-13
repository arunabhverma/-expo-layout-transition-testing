import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FirstStep } from "@/components/FirstStep";
import { FinalStep } from "@/components/FinalStep";

const Main = () => {
  const [next, setNext] = useState(0);
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Animated.View
        layout={LinearTransition}
        style={[
          styles.sheetContainer,
          { backgroundColor: theme.colors.card, paddingBottom: bottom },
        ]}
      >
        <Header next={next} setNext={setNext} />
        <Animated.View
          layout={LinearTransition}
          style={{ paddingHorizontal: 16 }}
        >
          {next === 0 ? <FirstStep /> : <FinalStep />}
        </Animated.View>
        <Footer next={next} setNext={setNext} />
      </Animated.View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  sheetContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    gap: 20,
  },
});
