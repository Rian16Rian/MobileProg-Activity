import { View, StyleSheet, Image } from 'react-native';

export default function Avatar({ theme }) {
  return (
    <View style={[styles.container, theme.container]}>
      <Image
        style={styles.avatar}
        source={require('../../assets/profile.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
    marginLeft: 15,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 70,
    border: '2px solid black',
  },
});
