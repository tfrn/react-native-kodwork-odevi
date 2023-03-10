import React from 'react'
import Details from './pages/Details';
import FavoriteJobs from './pages/FavoriteJobs';
import Jobs from './pages/Jobs';
import SelectedJobs from './pages/SelectedJobs';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jobs" component={Jobs} options={{
        title:"Jobs",
        headerStyle:{backgroundColor:"#64b5f6"},
        headerTitleStyle:{color:"white"},
      }} />
      <Stack.Screen name="detailPage" component={Details} options={{
        title:"Job Detail",
        headerStyle:{backgroundColor:"#64b5f6"},
        headerTitleStyle:{color:"white"},
      }} />
      <Stack.Screen name="favoritePage" component={FavoriteJobs} options={{
        title:"Jobs I Follow",
        headerStyle:{backgroundColor:"#64b5f6"},
        headerTitleStyle:{color:"white"},
      }} />
      <Stack.Screen name="selectedPage" component={SelectedJobs} options={{
        title:"Jobs I Applied",
        headerStyle:{backgroundColor:"#64b5f6"},
        headerTitleStyle:{color:"white"},
      }} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{tabBarIcon:(props)=> <Ionicons name="ios-home" {...props} size={24}/>, headerShown: false }}/>
        <Tab.Screen name="Selected" component={SelectedJobs} options={{tabBarIcon:(props)=> <Ionicons name="bookmark-outline" {...props} size={24}/>, headerShown: false }}/>
        <Tab.Screen name="Favorite" component={FavoriteJobs} options={{tabBarIcon:(props)=> <Ionicons name="star-outline" {...props} size={24}/>, headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router;
