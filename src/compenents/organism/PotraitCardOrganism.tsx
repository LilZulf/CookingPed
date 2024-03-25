import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native'
import ImageBackgroundAtom from '../atoms/ImageBackgroundAtom'
import { SvgXml } from 'react-native-svg'
import Theme from '../theme'
import TextAtom from '../atoms/TextAtom'
import theme from '../theme'
import LinearGradient from 'react-native-linear-gradient'

interface PotraitCardOrganismProps {
    title: string,
    time: string,
    img: string,
    difficulty?: string
}

const PotraitCardOrganism: React.FC<PotraitCardOrganismProps> = ({ difficulty = '', title, time, img }) => {
    return (
        <ImageBackground
            style={{
                width: 230,
                height: 320,
                borderRadius: 14,
                marginRight: 10,
            }}
            source={{ uri: img }}
            resizeMode='cover'
            imageStyle={{
                borderRadius: 14,
            }}
            onError={(error) => {
                console.error('Image failed to load:', error);
            }}
        >
            <LinearGradient
                style={{
                    flex: 1,
                    borderRadius: 14,
                    padding: 20,
                }}
                colors={['transparent', Theme.colors.black]}
                start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
            >
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert("Also coming soon lol!")
                        }}
                        style={styles.bookmarkButton}>
                        <SvgXml
                            xml={Theme.bookmarkWhite}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyContainer}>
                    <TextAtom
                        style={{
                            color: 'white',
                            fontFamily: 'Mulish-ExtraBold',
                            fontSize: 24,
                            marginBottom: '5%',
                        }}
                        numberOfLines={3}
                        ellipsizeMode='tail'
                    >
                        {title}
                    </TextAtom>
                    <TextAtom
                        style={{
                            color: 'white',
                            fontFamily: 'Mulish-SemiBold',
                            fontSize: 16
                        }}
                    >
                        {difficulty} | {time}
                    </TextAtom>
                </View>
            </LinearGradient>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bookmarkButton: {
        backgroundColor: Theme.colors.primary,
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    topContainer: {
        alignItems: 'flex-end'
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'flex-end',

    }

})

export default PotraitCardOrganism