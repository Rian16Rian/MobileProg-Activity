import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function DarkMode({ theme, toggleTheme, darkMode }) {
  return (
    <View style={[styles.container, theme.container]}>
      <View style={styles.circle}>
        <Feather name="moon" size={24} color="white" />
      </View>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={[styles.text, theme.text]}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Text>
        <View style={styles.right}>
          <FontAwesome name="chevron-right" size={15} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginLeft: 30,
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  text: {
    fontSize: 18,
    marginRight: 85,
    fontFamily: 'regular',
  },
  right: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ec8e17',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#63625c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
