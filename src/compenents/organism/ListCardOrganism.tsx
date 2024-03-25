import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import ImageViewAtom from '../atoms/ImageViewAtom'
import TextAtom from '../atoms/TextAtom'
import theme from '../theme'

interface ListCardOrganismProps {
    title: string;
    difficulty: string;
    time: string;
    endpoint: string;
    image: string
}

const ListCardOrganism: React.FC<ListCardOrganismProps> = ({
    title,
    difficulty,
    time,
    endpoint,
    image
}) => {
    return (
        <View style={styles.container}>
            <ImageViewAtom
                source={{uri : image}}
                style={[styles.img]}
                resizeMode='cover'
            />
            <View style={styles.textContainer}>
                <View>
                    <TextAtom
                        size='medium'
                        style={{
                            fontFamily: 'Mulish-Bold',
                            color: theme.colors.black
                        }}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        {title}
                    </TextAtom>
                    <TextAtom
                        size='small'
                        style={{
                            fontFamily: 'Mulish-Medium',
                            color: theme.colors.grayText
                        }}
                    >
                        {difficulty} | {time}
                    </TextAtom>
                </View>
                <View
                    style={styles.badgeStatus}
                >
                    <TextAtom
                        style={{
                            fontSize: 10,
                            fontFamily: 'Mulish-SemiBold',
                            color: 'white'
                        }}
                    >
                        Start Cooking
                    </TextAtom>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom : '5%',
        backgroundColor : 'white',
        borderRadius : 14,
        padding : '5%'
    },
    img: {
        borderRadius: 14,
        marginEnd: '3%',
        width: 90,
        height: 90
    },
    textContainer: {
        flex: 1, // This makes the text container take up the remaining space
        justifyContent: 'space-between', // Align text to the bottom
    },
    badgeStatus: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 8
    }
})

export default ListCardOrganism
