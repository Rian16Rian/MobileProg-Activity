import { View, Text, StyleSheet} from 'react-native';

export default function FullName({ theme }){

  return (
    <View style={[styles.container, theme.container]}>
        <Text style={[styles.first, theme.first]}>Rianson</Text>
        <Text style={[styles.second, theme.second]}>Amar</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: 30,
    padding: 2,
  },
  first: {
    fontSize: 30,
    fontFamily: 'extraBold',
  },
  second: {
    fontSize: 30,
    marginTop: -20,
    color: 'gray',
    fontFamily: 'extraBold',
  },

});