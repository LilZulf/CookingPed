import React from 'react'
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

interface TextProps extends RNTextProps {
  size?: 'small' | 'medium' | 'large';
}

const TextAtom: React.FC<TextProps> = ({ children, size = 'medium', style, ...props }) => {
  return (
    <RNText style={[styles.text, styles[size], style]} {...props} >
      {children}
    </RNText>
  )
}
const styles = StyleSheet.create({
  text: {
    // Common text styles
  },
  small: {
    fontSize: 12,
  },
  medium: {
    fontSize: 16,
  },
  large: {
    fontSize: 20,
  },
});

export default TextAtom