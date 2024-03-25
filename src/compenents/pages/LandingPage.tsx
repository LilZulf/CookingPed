import React, { useEffect, useState } from 'react'
import { Text, View, Alert } from 'react-native'
import SplashScreenTemplate from '../templates/SplashScreenTemplates'
import ImageBackgroundAtom from '../atoms/ImageBackgroundAtom'
import TextAtom from '../atoms/TextAtom'
import SpacerAtom from '../atoms/SpacerAtom'
import Theme from '../theme';
import ButtonWithIconMolecul from '../molecules/ButtonWithIconMolecul'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import AsyncStorage from '@react-native-async-storage/async-storage';

type LandingPageProps = NativeStackScreenProps<RootStackParamList, 'Landing'>

const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
    const [userData, setUserData] = useState<string | null>(null);

    const handlePress = async (): Promise<void> => {
        await AsyncStorage.setItem("USER", 'Cooking Pedia');
        navigation.push('Tab');
    }

    const getUser = async (): Promise<string> => {
        const value = await AsyncStorage.getItem("USER");
        return value != null ? value : '';
    }

    useEffect(() => {
        setUserData('');
        const fetchData = async () => {
            const user = await getUser();
            if (user !== '') {
                setUserData(user);
                navigation.push('Tab')
            }
            else{
                setUserData(null);
            }
        }
        fetchData();

    }, []);

    return (
        <SplashScreenTemplate>
            {userData === null ?
                (<>
                    <ImageBackgroundAtom
                        source={require('../../assets/img/Banner.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0, 1)'
                        }}
                    >
                        <View style={{
                            paddingHorizontal: '5%',
                            paddingVertical: '10%',
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',

                        }}>
                            <TextAtom
                                style={{
                                    fontSize: 32,
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                    fontFamily: 'Mulish-ExtraBold'
                                }}
                            >
                                One Platform to{"\n"} Share Food Recipes
                            </TextAtom>
                            <SpacerAtom sizePercentage={2} />
                            <TextAtom
                                style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                    fontFamily: 'Mulish-Regular'
                                }}
                            >
                                With one integration, search for recipes and share them with everyone
                            </TextAtom>
                            <SpacerAtom sizePercentage={10} />
                            <ButtonWithIconMolecul
                                title='Get Started'
                                xml={Theme.xmlIconButton}
                                textStyle={{
                                    fontFamily: 'Mulish-Bold',
                                    fontSize: 16,
                                    textAlignVertical: 'center'
                                }}
                                activeOpacity={.7}
                                onPress={handlePress}
                            >

                            </ButtonWithIconMolecul>
                        </View>
                    </ImageBackgroundAtom>
                </>) : (
                    <></>
                )}
        </SplashScreenTemplate>
    )
}

export default LandingPage