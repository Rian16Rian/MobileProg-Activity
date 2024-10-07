import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Manage({ theme }) {
  return (
    <View style={[styles.container, theme.container]}>
      <View style={styles.circle}>
        <FontAwesome5 name="dot-circle" size={24} color='coral' />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, theme.text]}>Manage user</Text>
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
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    marginRight: 65,
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
    backgroundColor: 'mistyrose',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
