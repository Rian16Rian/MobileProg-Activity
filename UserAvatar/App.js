import UserAvatar from './profile/userprofile';
import { useFonts } from 'expo-font';
import { ThemeProvider } from './Theme';;

export default function App() {
  const [loadedFonts] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  if (!loadedFonts) {
    return null;
  }

  return (
    <ThemeProvider>
      <UserAvatar />
    </ThemeProvider>
  );
}
