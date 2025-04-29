import { Text, View, StyleSheet } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
