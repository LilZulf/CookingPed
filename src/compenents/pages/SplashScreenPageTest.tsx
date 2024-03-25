import React, { useEffect, useState } from 'react'
import SplashScreenTemplate from '../templates/SplashScreenTemplates'
import ImageBackgroundAtom from '../atoms/ImageBackgroundAtom'
import { View, Alert } from 'react-native';
import TextAtom from '../atoms/TextAtom';
import SpacerAtom from '../atoms/SpacerAtom';
import Theme from '../theme';
import ButtonWithIconMolecul from '../molecules/ButtonWithIconMolecul';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SpalshScreenProps = NativeStackScreenProps<RootStackParamList, "SplashScreen">

const SplashScreenPageTest: React.FC<SpalshScreenProps> = ({navigation}) => {
    const [toggleValue, setToggleValue] = useState(false);

    const handlePress = (): void => {
        navigation.navigate('Home');
    };
    return (
        <SplashScreenTemplate>
            <ImageBackgroundAtom source={require('../../assets/img/Banner.png')}
                style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0, 0.8)' }}
                resizeMode='cover'
            >
                <View style={{
                    paddingHorizontal: '5%',
                    paddingVertical: '10%',
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <TextAtom style={{
                        fontSize: 32,
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'Mulish-ExtraBold'
                    }}>
                        One Platform to{"\n"} Share Food Recipes
                    </TextAtom>
                    <SpacerAtom sizePercentage={2} />
                    <TextAtom style={{
                        fontSize: 16,
                        color: 'white',
                        textAlign: 'center',
                        fontFamily: 'Mulish-Regular'
                    }}>
                        With one integration, search for recipes and share them with everyone
                    </TextAtom>
                    <SpacerAtom sizePercentage={15} />
                    <ButtonWithIconMolecul
                        title='Get Started'
                        xml={Theme.xmlIconButton}
                        textStyle={{
                            fontFamily: 'Mulish-Bold',
                            fontSize: 16,
                            textAlignVertical: 'center'
                        }}
                        activeOpacity={.8}
                        onPress={handlePress}
                    />
                </View>
            </ImageBackgroundAtom>
        </SplashScreenTemplate>
    )
}

export default SplashScreenPageTest