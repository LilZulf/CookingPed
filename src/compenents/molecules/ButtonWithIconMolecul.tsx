import React from 'react'
import ButtonAtom from '../atoms/ButtonAtom'
import { SvgXml } from 'react-native-svg';
import SpacerAtom from '../atoms/SpacerAtom';
import theme from '../theme';
import { TouchableOpacity, Text, TouchableOpacityProps, View, TextStyle, StyleSheet } from 'react-native';

interface ButtonIconProps extends TouchableOpacityProps {
    xml: string,
    title: string,
    icWidth?: number,
    icHeight?: number,
    textStyle?: TextStyle
}

const ButtonWithIconMolecul: React.FC<ButtonIconProps> = ({
    xml,
    icHeight = 45,
    icWidth = 45,
    title,
    textStyle,
    style,
    ...props
}) => {
    return (
        <ButtonAtom
            title={title}
            textStyle={textStyle}
            style={[styles.button, style]}
            {...props}
        >
            <SvgXml xml={xml} width={icWidth} height={icHeight} />
            <SpacerAtom sizePercentage={4} orientation='horizontal' />
        </ButtonAtom>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: 40,
        width: 177,
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})

export default ButtonWithIconMolecul