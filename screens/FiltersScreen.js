import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/workouts';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        //trackColor={{ true: Colors.primaryColor }}
        //thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [isHills, setisHills] = useState(false);
  const [isRoad, setisRoad] = useState(false);
  const [isPersonalBest, setisPersonalBest] = useState(false);
  const [isSeasonBest, setisSeasonBest] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      hills: isHills,
      road: isRoad,
      personalBest: isPersonalBest,
      seasonBest: isSeasonBest
    };

    dispatch(setFilters(appliedFilters));
  }, [isHills, isRoad, isPersonalBest, isSeasonBest, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label='Hills'
        state={isHills}
        onChange={newValue => setisHills(newValue)}
      />
      <FilterSwitch
        label='Road'
        state={isRoad}
        onChange={newValue => setisRoad(newValue)}
      />
      <FilterSwitch
        label='Personal Best'
        state={isPersonalBest}
        onChange={newValue => setisPersonalBest(newValue)}
      />
      <FilterSwitch
        label='Season Best'
        state={isSeasonBest}
        onChange={newValue => setisSeasonBest(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Workouts',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'montserrat-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
