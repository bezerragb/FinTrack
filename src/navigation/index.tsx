import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import AddEntry from '../screens/AddEntry';
import Tags from '../screens/Tags';
import Reports from '../screens/Reports';

import Login from '../screens/Login';
import Register from '../screens/Register';

import { useAuthStore } from '../store/useAuthStore';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function AuthRoutes() {

  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="Register"
        component={Register}
      />

    </Stack.Navigator>

  );
}

function AppRoutes() {

  return (

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

        tabBarIcon: ({ focused }) => {

          let iconName: any;

          switch (route.name) {

            case 'Home':
              iconName = focused
                ? 'home'
                : 'home-outline';
              break;

            case 'Adicionar':
              iconName = focused
                ? 'add-circle'
                : 'add-circle-outline';
              break;

            case 'Relatórios':
              iconName = focused
                ? 'pie-chart'
                : 'pie-chart-outline';
              break;

            case 'Categorias':
              iconName = focused
                ? 'pricetag'
                : 'pricetag-outline';
              break;

            default:
              iconName = 'ellipse';
          }

          return (
            <Ionicons
              name={iconName}
              size={30}
              color={
                focused
                  ? '#00D95F'
                  : '#94A3B8'
              }
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
        name="Relatórios"
        component={Reports}
      />

      <Tab.Screen
        name="Categorias"
        component={Tags}
      />

    </Tab.Navigator>

  );
}

export default function Routes() {

  const user = useAuthStore(
    (state) => state.user
  );

  const loadSession = useAuthStore(
    (state) => state.loadSession
  );

  useEffect(() => {

    loadSession();

  }, []);

  return (

    <NavigationContainer>

      {user ? (
        <AppRoutes />
      ) : (
        <AuthRoutes />
      )}

    </NavigationContainer>

  );
}