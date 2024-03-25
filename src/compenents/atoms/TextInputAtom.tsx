import React from 'react'
import {TextInput, TextInputProps, StyleSheet} from 'react-native'

interface TextInputAtomProps extends TextInputProps {
    size?: 'small' | 'medium' | 'large';
}

const TextInputAtom: React.FC<TextInputAtomProps> = ({ size = 'medium', style, ...props }) => {
    return (
      <TextInput style={[styles.input, styles[size], style]} {...props} />
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 8,
      fontSize: 16,
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

export default TextInputAtom