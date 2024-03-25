import React from 'react'
import { SvgUri } from 'react-native-svg';

interface AtomSvgIconProps {
    uri: string;
    width: number;
    height: number;
    color?: string;
  }

const IconSvgAtom: React.FC<AtomSvgIconProps> = ({uri, width, height, color= 'white'}) => {
    return <SvgUri width={width} height={height} uri={uri} fill={color} />;
}

export default IconSvgAtom