import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../App';
import { TabNavigationState } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListCardOrganism from '../organism/ListCardOrganism';
import TextInputIconMolecul from '../molecules/TextInputIconMolecul';
import theme from '../theme';
import TextAtom from '../atoms/TextAtom';
import { SvgXml } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';

type BookmarkPageProps = NativeStackScreenProps<RootStackParamList, "Bookmark">

interface BookmarkRecipe {
  title: string;
  difficulty: string;
  time: string;
  image: string;
  endpoint: string;
}

const BookmarkPage = ({ route, navigation }: BookmarkPageProps) => {
  const [data, setData] = useState<BookmarkRecipe[]>([]);
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const handlePress = (): void => {
    navigation.navigate("Home")
  }

  const handlePressDetail = (endpoint: string) => {
    navigation.push('Detail', {
      data: endpoint
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const value = await AsyncStorage.getItem("bookmarkDatas");
      if (value != null) {
        setData(JSON.parse(value));
      }
    }
    fetchData();

  }, [])

  return (
    <View style={[styles.container,
    {
      paddingVertical: screenHeight * 0.04,
      paddingHorizontal: screenWidth * 0.05
    }]} >
      <TextAtom
        style={{
          marginBottom: '5%',
          fontFamily: 'Mulish-Bold',
          color: theme.colors.black
        }}
        size='large'

      >
        Bookmark Recipes
      </TextAtom>
      <View style={styles.search}>
        <TextInputIconMolecul
          icon={theme.searchIcon}
          size='small'
          style={styles.searchBox}
          placeholder='Search Your Bookmarks'
        />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity style={styles.filterButton}>
            <SvgXml
              xml={theme.filterIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          {data.map((recipe, index) => (
            <TouchableOpacity
              onPress={() => handlePressDetail(recipe.endpoint)}
              key={index}
            >
              <ListCardOrganism
                key={index}
                title={recipe.title}
                time={recipe.time}
                image={recipe.image}
                difficulty={recipe.difficulty}
                endpoint={recipe.endpoint}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    flex: 4,
    borderColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 54
  },
  search: {
    flexDirection: 'row',
    marginBottom: '5%'
  },
  filterButton: {
    backgroundColor: theme.colors.primary,
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
});

export default BookmarkPage;
