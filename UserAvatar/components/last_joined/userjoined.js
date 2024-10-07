import { View, StyleSheet, Text} from 'react-native';

export default function Update({ theme }){

  return(
    <View style={[styles.container, theme.container]}>
      <Text style={[styles.textGray, theme.textGray]}>Joined</Text>
      <Text style={[styles.year, theme.year]}>1 year ago</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 200,
    marginTop: -220,
    padding: 20,
  },
  textGray: {
    fontSize: 16,
    fontFamily: 'medium',
  },
  year: {
    fontSize: 18,
    fontFamily: 'semiBold',
  },

});