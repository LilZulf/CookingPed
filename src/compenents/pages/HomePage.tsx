import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Alert, ScrollView, ActivityIndicator, BackHandler } from 'react-native';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ImageViewAtom from '../atoms/ImageViewAtom';
import TextAtom from '../atoms/TextAtom';
import TextInputIconMolecul from '../molecules/TextInputIconMolecul';
import Theme from '../theme';
import ButtonWithIconMolecul from '../molecules/ButtonWithIconMolecul';
import SpacerAtom from '../atoms/SpacerAtom';
import { SvgXml } from 'react-native-svg';
import TagsSelectorAtom from '../atoms/TagsSelectorAtom';
import PotraitCardOrganism from '../organism/PotraitCardOrganism';
import theme from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL_SERVER } from '@env';

type HomePageProps = NativeStackScreenProps<RootStackParamList, "Home">;

interface Resep {
  title: string,
  thumbnail: string,
  time: string,
  difficulty: string,
  endpoint: string
}

interface Category {
  title: string,
  endpoint: string,
}

const HomePage = ({ route, navigation }: HomePageProps) => {
  const [recipeData, setRecipeData] = useState<Resep[]>([]);
  const [option, setOption] = useState<string>('');
  const [jam, setJam] = useState(new Date());
  const [data, setData] = useState([
    { id: '1', label: 'All Recipes', endpoint: '/' },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCard, setIsLoadingCard] = useState(true);
  const [title, setTitle] = useState('');
  const [userName, setUserName] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');


  const handlePress = (endpoint: string) => {
    navigation.push('Detail', {
      data: endpoint
    });
  };

  const handleSubmit = () => {
    setIsLoadingCard(true);
    if (search != '') {
      const query = search;
      fetch(URL_SERVER+'api/recipe/search/' + query + '/1')
        .then((response) => response.json())
        .then((responseData: { message: string, data: Resep[] }) => {
          if (responseData.message != 'All Search Result') {
            Alert.alert(responseData.message);
            setIsLoading(true);
            getRecipes();
          }
          else {
            setRecipeData(responseData.data);
            setIsLoading(false);
            setIsLoadingCard(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(true);
        });
    }
  }

  const getRecipes = (endpoint?: string) => {
    setIsLoadingCard(true);
    if (endpoint) {
      fetch(URL_SERVER+'api/recipe/category' + endpoint + '1')
        .then((response) => response.json())
        .then((responseData: { message: string, data: Resep[] }) => {
          if (responseData.message != 'All Resep On Category') {
            Alert.alert(responseData.message);
            setIsLoading(true);
          }
          else {
            setRecipeData(responseData.data);
            setIsLoading(false);
            setIsLoadingCard(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(true);
        });
    } else {
      fetch(URL_SERVER+'api/recipe/all/1')
        .then((response) => response.json())
        .then((responseData: { message: string, data: Resep[] }) => {
          if (responseData.message != 'All Resep') {
            Alert.alert(responseData.message);
            setIsLoading(true);
          }
          else {
            setRecipeData(responseData.data);
            setIsLoading(false);
            setIsLoadingCard(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(true);
        });
    }

  }

  useEffect(() => {
    const fetchData = async () => {
      const value = await AsyncStorage.getItem("USER");
      if (value != null) {
        setUserName(value);
      }
    }
    fetchData();
    // Replace 'https://api.example.com/recipes' with your API endpoint
    if (data.length === 1) {
      // Your data fetching logic here
      fetch(URL_SERVER+'api/recipe/category')
        .then((response) => response.json())
        .then((apiData: { message: string, data: Category[] }) => {
          // Extract the 'data' array from the API response
          if (apiData.message === 'success to fetch all category') {
            const apiCategories = apiData.data;

            // Map the API categories to the format you need (id and label)
            const formattedCategories = apiCategories.map((category, index) => ({
              id: `${index + 2}`, // Start the id from 2 since you already have 'All' with id '1'
              label: category.title,
              endpoint: category.endpoint
            }));

            // Concatenate the 'All' category with the categories from the API
            const updatedData = [...data, ...formattedCategories];

            // Update the 'data' state with the new categories
            setData(updatedData);
            getRecipes();
          }

        })
        .catch((error) => {
          console.error('Error fetching API data:', error);
        });
    }

    const interval = setInterval(() => {
      setJam(new Date());
    }, 1000); // Perbarui setiap detik

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sapaan = () => {
    const jamSekarang = jam.getHours();
    if (jamSekarang >= 5 && jamSekarang < 12) {
      return 'Selamat Pagi,';
    } else if (jamSekarang >= 12 && jamSekarang < 17) {
      return 'Selamat Siang,';
    } else if (jamSekarang >= 17 && jamSekarang < 20) {
      return 'Selamat Sore,';
    } else {
      return 'Selamat Malam,';
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        // Show a progress spinner or loading indicator while data is fetching
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : (
        <>
          <View style={styles.greeting}>
            <View>
              <TextAtom
                size='large'
                style={{
                  fontFamily: 'Mulish-Bold',
                  color: Theme.colors.black
                }}
              >
                {sapaan()}
              </TextAtom>
              <TextAtom
                style={{
                  fontFamily: 'Mulish-Regular',
                  color: Theme.colors.black,
                  marginTop: 4
                }}
              >
                {userName}
              </TextAtom>
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert('Coming Soon lol!')}
            >
              <ImageViewAtom
                source={require('../../assets/img/Placeholder.png')}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <TextInputIconMolecul
              icon={Theme.searchIcon}
              size='small'
              style={styles.searchBox}
              placeholder={'Search recipes..'}
              onChangeText={setSearch}
              value={search}
              onSubmitEditing={() => handleSubmit()}
            />
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.filterButton}>
                <SvgXml
                  xml={Theme.filterIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tagSelect}>
            <TagsSelectorAtom
              data={data}
              onSelect={(value) => setOption(value)}
              onChange={(value, data) => {
                //Alert.alert('Data Yang Dipilih', data?.endpoint);
                { data ? setTitle(data.label) : setTitle('Latest Recipes') }
                if (data?.endpoint != '/') {
                  getRecipes(data?.endpoint);
                } else {
                  getRecipes();
                }
              }}
            />
          </View>
          <View style={styles.popular}>
            <TextAtom
              size='large'
              style={{
                fontFamily: 'Mulish-ExtraBold',
                color: Theme.colors.black,
                marginBottom: '5%'
              }}
            >
              {title}
            </TextAtom>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {isLoadingCard
                ? (<ActivityIndicator size="large" color={theme.colors.primary} />)
                : (
                  recipeData.map((recipe, index) => (
                    <TouchableOpacity
                      onPress={() => handlePress(recipe.endpoint)}
                      key={index}
                    >
                      <PotraitCardOrganism
                        title={recipe.title}
                        time={recipe.time}
                        img={recipe.thumbnail}
                        difficulty={recipe.difficulty}
                      />
                    </TouchableOpacity>
                  ))
                )
              }

            </ScrollView>

          </View>
        </>
      )
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  greeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%'
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
    backgroundColor: Theme.colors.primary,
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  tagSelect: {
    marginBottom: '5%'
  },
  popular: {

  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
