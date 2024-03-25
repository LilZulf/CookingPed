import React from 'react'
import { Text, StyleSheet, View, TextInput, TextInputProps } from 'react-native'
import TextInputAtom from '../atoms/TextInputAtom'
import { SvgXml } from 'react-native-svg';
import Theme from '../theme';

interface TextInputIconMoleculProps extends TextInputProps {
    size?: 'small' | 'medium' | 'large';
    icon: string; // SVG XML content
    iconStyle?: any; // Style for the icon
    placeholder? : string 
  }

const TextInputIconMolecul: React.FC<TextInputIconMoleculProps> = ({ placeholder='Input' ,size = 'medium', icon, iconStyle, style, ...props }) => {
  return (
    <View style={[styles.inputContainer, style]} >
        {icon && (
            <SvgXml 
                xml={icon}
                style={{
                    marginRight : 5
                }}
            />
        )}
        <TextInput
            style={[styles.input]}
            placeholder={placeholder}
            {...props}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row', // Arrange icon and input horizontally
      alignItems: 'center', // Align items vertically within the container
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontSize: 16,
      backgroundColor: 'white'
    },
    input: {
      flex: 1, // Take remaining space
      fontSize: 16,
      fontFamily : 'Mulish-Regular',
      color : 'gray'
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
    icon: {
      marginRight: 8, // Add some spacing between icon and input
    },
  });
export default TextInputIconMolecul