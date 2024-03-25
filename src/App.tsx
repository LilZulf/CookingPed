import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './compenents/pages/HomePage';
import BookmarkPage from './compenents/pages/BookmarkPage';
import SplashScreenPageTest from './compenents/pages/SplashScreenPageTest';
import LandingPage from './compenents/pages/LandingPage';
import DetailPage from './compenents/pages/DetailPage';
import theme from './compenents/theme';
import { SvgXml } from 'react-native-svg';

export type RootStackParamList = {
  Home: undefined;
  Bookmark: undefined;
  SplashScreen: undefined;
  Landing: undefined;
  Tab: undefined;
  Detail: {
    data: string;
  };
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<RootStackParamList>();

  const TabStack = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused
              ? theme.homeIconFocused
              : theme.homeIcon;
          } else if (route.name === 'Bookmark') {
            iconName = focused
              ? theme.bookmarkIconFocused
              : theme.bookmarkIcon;
          }

          // You can return any component that you like here!
          return <SvgXml xml={iconName} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingVertical: 10 },
      })}
    >

      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Bookmark" component={BookmarkPage} options={{ headerShown: false }} />
      {/* Add other tabs/screens here */}
    </Tab.Navigator>
  );

  const MainStack = () => (
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen name='SplashScreen' component={SplashScreenPageTest} options={{ headerShown: false }} />
      <Stack.Screen name="Tab" component={TabStack} options={{ headerShown: false }} />
      <Stack.Screen name="Bookmark" component={BookmarkPage} />
      <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {MainStack()}
    </NavigationContainer>
  );
};

export default App;
