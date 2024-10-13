import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutRight,
} from "react-native-reanimated";
import { Image } from "expo-image";

const Next_IN = SlideInRight;
const Next_OUT = SlideOutRight;
const BLUR_HASH = "LZOM5EP:xuaf2zNet7X80prrWBax";
const CARD_IMAGE =
  "https://img.freepik.com/free-photo/abstract-2d-colorful-wallpaper-with-grainy-gradients_23-2151001479.jpg?t=st=1728757582~exp=1728761182~hmac=29a4056210e33a7dfa6f6a4f1929c0e8dcfdeb98ca7f05ce58499f0fa4d22a33&w=2000";

export const FinalStep = () => {
  return (
    <Animated.View entering={Next_IN} exiting={Next_OUT} style={{ gap: 12 }}>
      <Animated.View
        entering={FadeIn.delay(300)}
        exiting={FadeOut}
        style={{ margin: 10 }}
      >
        <View style={styles.cardContainer}>
          <Image
            source={CARD_IMAGE}
            cachePolicy={"none"}
            placeholder={{ blurhash: BLUR_HASH }}
            transition={1500}
            style={styles.cardImageStyle}
          />
          <Animated.View
            entering={FadeIn.delay(1500)}
            exiting={FadeOut}
            style={styles.cardContentWrapper}
          >
            <View style={[styles.logo, styles.side]} />
            <View style={styles.logo} />
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(1500)}
            exiting={FadeOut}
            style={styles.cardContentContainer}
          >
            <Text style={styles.cardNumberText}>4444 3333 2222 1111</Text>

            <View style={styles.cardExtraDetails}>
              <Text style={styles.cardOwnerName}>Jon Doe</Text>
              <Text style={styles.cardExpirationDate}>07 / 28</Text>
            </View>
          </Animated.View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    aspectRatio: 1.586,
    justifyContent: "flex-end",
  },
  cardImageStyle: {
    borderRadius: 12,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  cardContentWrapper: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "row",
  },
  logo: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: "white",
    opacity: 0.5,
    borderRadius: 50,
  },
  side: {
    opacity: 0.7,
    marginRight: -25,
  },
  cardContentContainer: {
    gap: 40,
    margin: 30,
  },
  cardNumberText: {
    color: "rgba(0,0,0,0.8)",
    fontSize: 30,
    fontWeight: "500",
  },
  cardOwnerName: {
    color: "rgba(0,0,0,0.8)",
    fontSize: 20,
    fontWeight: "500",
  },
  cardExpirationDate: {
    color: "rgba(0,0,0,0.8)",
    fontSize: 20,
    fontWeight: "500",
  },
  cardExtraDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
