import 'react-native-gesture-handler';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AppNav from './src/navigation/AppNav';
import { AuthProvider } from './src/context/AuthContext';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isLoaded] = useFonts({
    'bitter-bold': require('./assets/fonts/Bitter-Bold.ttf'),
    'bitter-light': require('./assets/fonts/Bitter-Light.ttf'),
    'bitter-medium': require('./assets/fonts/Bitter-Medium.ttf'),
    'noto-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
    'noto-light': require('./assets/fonts/NotoSans-Light.ttf'),
    'noto-regular': require('./assets/fonts/NotoSans-Regular.ttf'),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    <AuthProvider>
      <AppNav handleOnLayout={handleOnLayout} />
    </AuthProvider>
  );
};

export default App;
