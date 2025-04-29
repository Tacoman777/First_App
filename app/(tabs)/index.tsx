//Tutorial Link
//https://docs.expo.dev/tutorial/create-your-first-app/

import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/jay-gajjar-hVMVcnpM-Y0-unsplash.jpg');

export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.text}>Home screen</Text>
        
        <Link href="/about" style={styles.button}>
          Go to About screen
        </Link>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
      </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: '#000000',
    
  },
  container: {
    
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer: {
    height: '0%',
  },
  image: {
    width: 320,
    height: 444,
    borderRadius: 18,
  },
});


