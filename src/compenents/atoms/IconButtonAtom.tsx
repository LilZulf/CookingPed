import React from 'react';
import { TouchableOpacity, StyleSheet, View, TouchableOpacityProps } from 'react-native';
 // You can replace this with your desired icon library
import { SvgXml } from 'react-native-svg';
import theme from '../theme';

interface IconButtonProps extends TouchableOpacityProps {
    onPress: () => void;
    iconName: string;
}

const IconButtonAtom: React.FC<IconButtonProps> = ({
    onPress,
    iconName,
    style,
    ...props
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]} {...props}>
            <View style={styles.iconContainer}>
                <SvgXml
                    xml={iconName}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 50, // Makes the container circular
        backgroundColor: theme.colors.primary, // Background color for the circular button
        padding: 10,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default IconButtonAtom;
