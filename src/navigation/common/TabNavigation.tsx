import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  NativeStackNavigationOptions
} from '@react-navigation/native-stack';
import { Icon, IconButton } from 'native-base';
import React from 'react';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import { Home } from 'screens/Home';
import { ProductHome } from '../../screens/product/ProductHome';

interface Props {
  navigation: any;
}
const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = (props: Props) => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName="Home"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
         
          tabBarIcon: ({focused, color}) => (
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={
                    <VectorIcon
                      name={focused === false ? 'home-outline' : 'home-sharp'}
                    />
                  }
                  color={focused === true ? 'warning.500' : 'black'}
                />
              }
            />
          ),
        }}
      />
     
      <Tab.Screen
        name="Product"
        component={ProductHome}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={<VectorIcon name="home" />}
                  color={focused === true ? 'warning.500' : 'black'}
                />
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
