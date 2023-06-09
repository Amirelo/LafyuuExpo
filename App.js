import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/user/screens/SignInScreen';
import SplashScreen from './src/screens/user/screens/SplashScreen';
import SignUpScreen from './src/screens/user/screens/SignUpScreen';
import CartScreen from './src/screens/product/screens/CartScreen';
import { useEffect, useMemo, useReducer, useState } from 'react';
import { AuthContext } from './src/components/AuthContext';
import HomeScreen from './src/screens/product/screens/HomeScreen';
import ExploreScreen from './src/screens/product/screens/ExploreScreen';
import OfferScreen from './src/screens/product/screens/OfferScreen';
import FavoriteScreen from './src/screens/product/screens/FavoriteScreen';
import AccountScreen from './src/screens/product/screens/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as images from './src/assets/images';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);


  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );


  

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ?
          <Stack.Navigator initialRouteName='Splash Screen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash Screen" component={SplashScreen} />
            <Stack.Screen name='Sign In' component={SignInScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
          </Stack.Navigator>
          :
          <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} >
            </Tab.Screen>
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Offer" component={OfferScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
          </Tab.Navigator>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
