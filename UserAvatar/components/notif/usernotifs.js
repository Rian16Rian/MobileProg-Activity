import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Notifications({ theme }) {
  return (
    <View style={[styles.container, theme.container]}>
      <View style={styles.circle}>
        <MaterialIcons name="notifications-none" size={24} color="black" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, theme.text]}>Notifications</Text>
        <View style={styles.right}>
          <FontAwesome name="chevron-right" size={15} color="gray" />
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
    marginTop: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    marginRight: 70,
    fontFamily: 'regular',
  },
  right: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lavender',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eeccff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
