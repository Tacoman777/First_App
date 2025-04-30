//Tutorial Link
//https://docs.expo.dev/tutorial/create-your-first-app/

import { Text, View, ScrollView, StyleSheet, } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';


import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/Pepperoni Pizza.jpg');

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}> Pizza </Text>
        <Text style={styles.text}> Pizza of the Day </Text>
        
        <Link href="/about" style={styles.button}>
          Go to About screen
        </Link>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <View style={styles.footerContainer}>
          <Button label="Choose a photo" />
          <Button label="Use this photo" />
        </View>
      </View>
    </ScrollView>
    
  
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    color: '#fff',
    
  },
  header: {
    flex: 1,
    color: '#FFD33D',
    fontSize: 80,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: 'red',
    textShadowOffset: { width: 3, height: 5},
    textShadowRadius: 5,
    
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer: {
    flex: 1.5,
    backgroundColor: '#fff',
    
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 15,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
  },
});


