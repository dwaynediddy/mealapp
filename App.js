import 'react-native-gesture-handler'
import * as React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//pages
import Form from './src/screens/Form'
import WelcomeBackground from './src/screens/WelcomeBackground'
import Plan from './src/screens/Plan'
import Motivation from './src/screens/Motivation'
// colors
import colors from './src/colors'

//the screen when first opening the app
function HomeScreen({ navigation }) {
  return (
    <View style={styles.body}>
      <WelcomeBackground />
      {/* Alert.prompt('Username', 'Enter a name and press OK', text => navigation.navigate(Home)) */}
    </View>
  )
}
// the screen for the form will be here
function FormScreen({ navigation }) {
  return (
    <Form />
  )
}
function PlanScreen({ navigation }) {
  return (
    <Plan />
  )
}
function MotivationScreen({ navigation }) {
  return (
    <Motivation />
  )
}
//navigation between pages
// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Form' component={FormScreen} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Plan' component={PlanScreen} />
        <Tab.Screen name='Motivation' component={MotivationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.primary,
  },
})

export default App
