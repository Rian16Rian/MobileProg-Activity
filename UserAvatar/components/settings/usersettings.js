import { View, StyleSheet, Text } from 'react-native';

export default function Grupo({ theme }){

  return(
    <View style={[styles.container, theme.container]}>
      <Text style={[styles.title, theme.title]}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    marginTop: 35,
    marginLeft: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: 'semiBold',
  },
  

});