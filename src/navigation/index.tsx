import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import AddEntry from '../screens/AddEntry';
import Tags from '../screens/Tags';

const Tab = createBottomTabNavigator();

export default function Routes() {

  return (

    <NavigationContainer>

      <Tab.Navigator

        screenOptions={({ route }) => ({

          headerShown: false,

          tabBarShowLabel: false,

          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
            borderTopWidth: 0,
            backgroundColor: '#FFFFFF',
          },

          tabBarIcon: ({ focused, size }) => {

            let iconName: any;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            }

            else if (route.name === 'Adicionar') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }

            else if (route.name === 'Tags') {
              iconName = focused ? 'pricetag' : 'pricetag-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={30}
                color={focused ? '#00D95F' : '#94A3B8'}
              />
            );
          },

        })}
      >

        <Tab.Screen
          name="Home"
          component={Home}
        />

        <Tab.Screen
          name="Adicionar"
          component={AddEntry}
        />

        <Tab.Screen
          name="Tags"
          component={Tags}
        />

      </Tab.Navigator>

    </NavigationContainer>

  );
}