import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/user/screens/SignInScreen';
import SplashScreen from './src/screens/user/screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash Screen' screenOptions={{headerShown:false}}>
        <Stack.Screen name = "Splash Screen" component={SplashScreen}/>
      <Stack.Screen name='Sign In' component={SignInScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
