import React from 'react'
import { ImageBackground, ImageBackgroundProps, ImageSourcePropType, ImageStyle, StyleSheet } from 'react-native'

interface ImageBackgroundAtomProps extends ImageBackgroundProps {
    source: ImageSourcePropType;
    resizeMode?: ImageStyle['resizeMode'];
}

const ImageBackgroundAtom: React.FC<ImageBackgroundAtomProps> = ({source, resizeMode = 'cover', children, ...props}) => {
    return (
        <ImageBackground source={source} style={styles.backgroundImage} resizeMode={resizeMode} {...props}>
            {children}
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
});

export default ImageBackgroundAtom