import React from 'react';
import { View, ViewProps } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ResponsiveSpacerProps extends ViewProps {
    sizePercentage: number;
    orientation?: 'horizontal' | 'vertical';
}

const SpacerAtom: React.FC<ResponsiveSpacerProps> = ({ sizePercentage, orientation = 'vertical', style }) => {
    const responsiveSize = orientation === 'horizontal' ? wp(sizePercentage) : hp(sizePercentage);

    return orientation === 'horizontal' ? (
        <View style={[{ width: responsiveSize }, style]} />
    ) : (
        <View style={[{ height: responsiveSize }, style]} />
    );
}

export default SpacerAtom;
