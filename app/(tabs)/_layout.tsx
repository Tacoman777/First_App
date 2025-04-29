import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Ionicons2 from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerShadowVisible: true,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#000000',
        },
      }}
    >
      <Tabs.Screen 
      name="index" 
      options={{ 
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen 
      name="about" 
      options={{ 
        title: 'About', 
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
        ),
      }} />
      <Tabs.Screen 
      name="contact" 
      options={{ 
        title: 'Contact',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons2 name={focused ? 'email-multiple' : 'email-multiple-outline'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen 
      name="account" 
      options={{ 
        title: 'Account',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons2 name={focused ? 'account-circle' : 'account-circle-outline'} color={color} size={24} />
        ),
      }} />
    </Tabs>
  );
}
