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
import colors from './src/colors'
//the screen when first opening the app
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text>
        Welcome
    </Text>
      <WelcomeBackground />
      {/* Alert.prompt('Username', 'Enter a name and press OK', text => navigation.navigate(Home)) */}
    </SafeAreaView>
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
//navigation between pages
// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Form' component={FormScreen} />
        <Tab.Screen name='Plan' component={PlanScreen} onlclik={alert => alert('you have not filled out the form today')} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default App
