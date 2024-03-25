import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View, TextStyle, StyleSheet } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  textStyle?: TextStyle;
}

const ButtonAtom: React.FC<ButtonProps> = ({ children, title, onPress, style, textStyle, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} {...props}>
      <View style={styles.buttonContent}>
        {children}
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContent: {
    flexDirection: 'row', // Align children and title horizontally
    alignItems: 'center', // Vertically align children and title
    justifyContent: 'center', // Horizontally center the content
  },
});

export default ButtonAtom;
