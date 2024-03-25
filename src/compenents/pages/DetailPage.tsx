import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Alert, ActivityIndicator } from 'react-native';
import ImageViewAtom from '../atoms/ImageViewAtom';
import IconButtonAtom from '../atoms/IconButtonAtom';
import theme from '../theme';
import TextAtom from '../atoms/TextAtom';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL_SERVER } from '@env';


type DetailRouteProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;


interface DetailRecipe {
  title: string;
  description: string;
  time: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
  image: string;
}

interface BookmarkRecipe {
  title: string;
  difficulty: string;
  time: string;
  image: string;
  endpoint: string;
}


const DetailPage = ({ route, navigation }: DetailRouteProp) => {
  const screenHeight = Dimensions.get('window').height;
  const imageHeight = screenHeight * 0.6;
  const [recipeData, setRecipeData] = useState<DetailRecipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { data } = route.params;

  useEffect(() => {
    fetch(URL_SERVER+'api/recipe/detail/' + data)
      .then((response) => response.json())
      .then((responseData: DetailRecipe) => { // Remove the nested object structure
        if (responseData) {
          setRecipeData(responseData);
          setIsLoading(false);
        } else {
          Alert.alert('Error', 'Data is undefined or null');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        const action = e.data.action;
        navigation.push('Tab');
      }),
    []
  );

  const addBookmark = async (bookmark: BookmarkRecipe) => {
    try {
      const storedData = await AsyncStorage.getItem('bookmarkDatas');
      const dataArray = storedData ? JSON.parse(storedData) : [];
      const isDuplicate = dataArray.some((item: BookmarkRecipe) => item.endpoint === bookmark.endpoint);

      if (!isDuplicate) {
        // Add the new item to the array
        dataArray.push(bookmark);

        // Serialize the updated array and store it
        const updatedData = JSON.stringify(dataArray);
        await AsyncStorage.setItem('bookmarkDatas', updatedData);
        Alert.alert('New item added successfully.', bookmark.title);
      } else {
        Alert.alert(
          'Duplicate Item',
          'This item already exists in your bookmarks. Do you want to delete the existing item and add the new one?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete Bookmark',
              onPress: async () => {
                // Find and remove the existing duplicate
                const filteredData = dataArray.filter((item : any) => item.endpoint !== bookmark.endpoint);

                // Serialize the updated array and store it
                const updatedData = JSON.stringify(filteredData);
                await AsyncStorage.setItem('bookmarkDatas', updatedData);
                Alert.alert('Item Deleted successfully.', bookmark.title);
              },
            },
          ]
        );
      }

    } catch (error) {
      console.error('Error adding new item:', error);
    }
  }

  const handleBookmark = () => {
    if (recipeData) {
      const dataBookmark: BookmarkRecipe = {
        title: recipeData.title,
        difficulty: recipeData.difficulty,
        endpoint: data,
        image: recipeData.image,
        time: recipeData.time
      }
      addBookmark(dataBookmark);
    }
    else {
      console.error('Error', 'Data Not Found!');
    }
  }




  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : (
        <>
          <ImageViewAtom
            source={{ uri: recipeData?.image }}
            style={[styles.image, { height: imageHeight }]}
            overlayChildren={
              <View style={styles.imageOverlay}></View>
            }
          />
          <View style={styles.bottomSheet}>
            {/* Your scrollable content goes here */}
            <TextAtom
              size='large'
              style={{
                fontFamily: 'Mulish-ExtraBold',
                color: theme.colors.black,
                marginBottom: '2%',
                fontSize: 24,
              }}
            >
              {recipeData?.title}
            </TextAtom>
            <TextAtom
              style={{
                color: theme.colors.grayText,
                fontFamily: 'Mulish-SemiBold',
                marginBottom: '2%',
                fontSize: 14
              }}
            >
              {recipeData?.difficulty} | {recipeData?.time}
            </TextAtom>
            <TextAtom
              style={{
                color: theme.colors.black,
                fontFamily: 'Mulish-Bold',
                marginBottom: '2%',
                fontSize: 18
              }}
            >
              Deskripsi
            </TextAtom>
            <TextAtom
              style={{
                color: theme.colors.grayText,
                fontFamily: 'Mulish-Regular',
                fontSize: 14,
                textAlign: 'justify',
                marginBottom: '2%',
              }}
            >
              {recipeData?.description}
            </TextAtom>
            <TextAtom
              style={{
                color: theme.colors.black,
                fontFamily: 'Mulish-Bold',
                marginBottom: '2%',
                fontSize: 18
              }}
            >
              Bahan
            </TextAtom>
            <TextAtom
              style={{
                color: theme.colors.grayText,
                fontFamily: 'Mulish-Regular',
                fontSize: 14,
                textAlign: 'justify',
                marginBottom: '2%',
              }}
            >
              {recipeData?.ingredients.map((ingredient, index) => (
                <Text key={index}>
                  &#8226; {ingredient}{' '}
                  {index < recipeData.ingredients.length - 1 ? '\n' : ''}
                </Text>
              ))}
            </TextAtom>

            <TextAtom
              style={{
                color: theme.colors.black,
                fontFamily: 'Mulish-Bold',
                marginBottom: '2%',
                fontSize: 18
              }}
            >
              Cara Membuat
            </TextAtom>
            <TextAtom
              style={{
                color: theme.colors.grayText,
                fontFamily: 'Mulish-Regular',
                fontSize: 14,
                textAlign: 'justify',
              }}
            >
              {recipeData?.steps.map((step, index) => (
                <Text key={index}>
                  {index + 1}. {step}{' '}
                  {index < recipeData.steps.length - 1 ? '\n' : ''}
                </Text>
              ))}
            </TextAtom>

          </View>
          <IconButtonAtom
            onPress={() => {
              navigation.push('Tab');
            }}
            iconName={theme.arrowBack}
            style={[styles.topButton, { top: 20, left: 20 }]}
          />
          <IconButtonAtom
            onPress={() => {
              handleBookmark()
            }}
            iconName={theme.bookmarkWhite}
            style={[styles.topButton, { top: 20, right: 20 }]}
          />
        </>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 0,
  },
  bottomSheet: {
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: 20,
    marginTop: -50, // To overlap with the image
  },
  topButton: {
    position: 'absolute',
    borderRadius: 50,
    padding: 10,
    width: 44,
    height: 44,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the opacity (0.4 for 40% opacity)
  },
});

export default DetailPage;
