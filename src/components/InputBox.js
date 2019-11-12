import React from "react";
import { TextInput, StyleSheet } from "react-native";

function InputBox(props) {
  const {
    type,
    style,
    val,
    placeholder,
    autoCapitalize,
    placeholderTextColor,
    autoCorrect,
    returnKeyType,
    textContentType,
    secureTextEntry,
    handlechange,
    keyboardType
  } = props;
  switch (type) {
    case 1:
      return (
        <TextInput
          style={[styles.inputField, style]}
          onChangeText={text => handlechange(text)}
          value={val}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || "rgb(130, 130, 130)"}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          returnKeyType={returnKeyType}
          textContentType={textContentType || "none"}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType || "default"}
        />
      );
    case 2:
      return (
        <TextInput
          style={[styles.plainField, style]}
          onChangeText={text => handlechange(text)}
          value={val}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || "rgb(130, 130, 130)"}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          returnKeyType={returnKeyType}
          textContentType={textContentType || "none"}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType || "default"}
        />
      );
  }
}

const styles = StyleSheet.create({
  inputField: {
    borderColor: "rgb(150, 150, 150)",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "rgb(248, 248, 248)",
    width: "90%",
    marginBottom: 15,
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    height: 50
  },
  plainField: {
    borderWidth: 0,
    fontSize: 16,
    width: "85%"
  }
});

export default InputBox;
