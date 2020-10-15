import React from 'react';
import { Platform, Text } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryWorkoutsScreen from '../screens/CategoryWorkoutsScreen'
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors'

const defaultStackNavOptions = {
  headerStyle: {
    //backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'montserrat-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'montserrat'
  },
  //headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTintColor: Colors.primaryColor,
  headerTitle: 'Robo rabbit'
};

const WorkoutsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryWorkouts: {
      screen: CategoryWorkoutsScreen
    },
    WorkoutDetail: WorkoutDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
)

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    WorkoutDetail: WorkoutDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Workouts: {
    screen: WorkoutsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name='ios-timer' size={25} color={tabInfo.tintColor} />
        );
      },
      //tabBarColor: Colors.primaryColor,
      tabBarLabel: 'Workouts'
        // Platform.OS === 'android' ? (
        //   <Text style={{ fontFamily: 'montserrat-bold' }}>Workouts</Text>
        // ) : (
        //   'Workouts'
        // )
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: 'Favorites'
        // Platform.OS === 'android' ? (
        //   <Text style={{ fontFamily: 'montserrat-bold' }}>Favorites</Text>
        // ) : (
        //   'Favorites'
        // )
    }
  }
};

const WorkoutsFavTabNavigator =
  createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'montserrat'
      },
      activeTintColor: Colors.accentColor
    }
  });
  // Platform.OS === 'android'
  //   ? createMaterialBottomTabNavigator(tabScreenConfig, {
  //       activeTintColor: 'white',
  //       shifting: true,
  //       barStyle: {
  //         backgroundColor: 'white'
  //       }
  //     })
  //   : createBottomTabNavigator(tabScreenConfig, {
  //       tabBarOptions: {
  //         labelStyle: {
  //           fontFamily: 'montserrat'
  //         },
  //         //activeTintColor: Colors.accentColor
  //       }
  //     });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    WorkoutsFavs: {
      screen: WorkoutsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Workouts'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'montserrat-bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator)
