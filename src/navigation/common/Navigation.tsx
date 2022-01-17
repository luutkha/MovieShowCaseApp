import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack';
import { HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import React from 'react';
import Product1 from 'screens/product/Product1';
import Product2 from 'screens/product/Product2';
import { TabNavigation } from '.';
import { HomeDetails } from '../../screens/Home';
import AppBar from './AppBar';
import {enableScreens} from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

enableScreens();
interface Props {}

const Stack = createSharedElementStackNavigator();
export type ScreenOptions = React.ComponentProps<typeof Stack.Screen>;
const screens: ScreenOptions[] = [
  {
    name: 'product1',
    component: Product1,
    options: {headerShown: true, header: AppBar},
  },
  {
    name: 'product2',
    component: Product2,
    options: {headerShown: true, header: AppBar},
  },
  
]

export const Navigation = (props: Props) => {
  
  const options: NativeStackNavigationOptions = {
    headerShown: true,
    header: AppBar,
    
    
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
          header: props => <AppBar {...props} />,
          gestureEnabled:true,
          // gestureDireaction: 
        }}>
        <Stack.Screen
          name="Index"
          component={TabNavigation}
          // options={options}
        />
        <Stack.Screen
          name="Details"
          component={HomeDetails}
          // options={options}
        />
        {/* <Stack.Screen name="Product1" component={Product1} options={options} />
        <Stack.Screen name="Product2" component={Product2} options={options} /> */}

        {screens.map(props => (
          <Stack.Screen key={props.name} {...props} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
