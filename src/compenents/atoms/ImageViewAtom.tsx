import React from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';

interface ImageViewAtomProps extends ImageProps {
  overlayChildren?: React.ReactNode; // Add overlayChildren prop for children
}

const ImageViewAtom: React.FC<ImageViewAtomProps> = ({
  style,
  overlayChildren, // Include overlayChildren prop
  ...restProps
}) => {
  return (
    <View>
      <Image style={[styles.img, style]} {...restProps} />
      {/* Render overlayChildren inside the overlay */}
      {overlayChildren 
      ? 
      ( <View style={styles.imageOverlay}>{overlayChildren}</View>)
      : (<></>)
    }
     
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100, // Set your default width here
    height: 100, // Set your default height here
    borderRadius: 50, // Default to a circular shape
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust the opacity (0.4 for 40% opacity)
  },
});

export default ImageViewAtom;
