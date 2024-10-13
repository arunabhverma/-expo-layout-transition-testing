import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";

interface CustomInputProps extends TextInputProps {
  label: string;
  placeholder?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  style,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <View>
      <Text style={[styles.label, { color: theme.colors.text, opacity: 0.5 }]}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.input,
          {
            color: theme.colors.text,
            borderColor: theme.colors.border,
          },
          style,
        ]}
        {...rest}
      />
    </View>
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
