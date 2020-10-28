import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,

} from 'react-native';
import { color } from 'react-native-reanimated'
import SwipeButton from 'rn-swipe-button'
import colors from '../colors'

const formPageScreens = props => {
  const [slideOneValue, setSlideOneValue] = useState()
  const [slideTwoValue, setSlideTwoValue] = useState()
  const [slideThreeValue, setSlideThreeValue] = useState()
  const [slideFourValue, setSlideFourValue] = useState()
  const [slideFiveValue, setSlideFiveValue] = useState() 
}

const formPageHandler = props => {

}

ONE=()=>{
  return (
  
    <View className="btn">
          <Text style={styles.text}>Are you bulking? </Text>
            <SwipeButton className="btn"
              disabled={false}
              //disable the button by doing true (Optional)
              swipeSuccessThreshold={70}
              height={45}
              //height of the button (Optional)
              width={330}
              //width of the button (Optional)
              title="Swipe if YES"
              //Text inside the button (Optional)
              //thumbIconImageSource={thumbIcon}
              //You can also set your own icon for the button (Optional)
              onSwipeSuccess={() => {
                console.log('Submitted Successfully!');
              }}
              //After the completion of swipe (Optional)
              railFillBackgroundColor="#e688a1" //(Optional)
              railFillBorderColor="#e688ff" //(Optional)
              thumbIconBackgroundColor="#ed9a73" //(Optional)
              thumbIconBorderColor="#ed9aff" //(Optional)
              railBackgroundColor="#bbeaa6" //(Optional)
              railBorderColor="#bbeaff" //(Optional)
            />
    </View>
 
  )}
 
  TWO=()=>{
    return (
      
        <View className="btn">
          <Text style={styles.text}>Is summer coming?</Text>
            <SwipeButton
                disabled={false}
                //disable the button by doing true (Optional)
                swipeSuccessThreshold={70}
                height={45}
                //height of the button (Optional)
                width={330}
                //width of the button (Optional)
                title="Swipe if YES"
             
                onSwipeSuccess={() => {
                  console.log('Submitted Successfully!');
                }}
                //After the completion of swipe (Optional)
                railFillBackgroundColor="#e688a1" //(Optional)
                railFillBorderColor="#e688ff" //(Optional)
                thumbIconBackgroundColor="#ed9a73" //(Optional)
                thumbIconBorderColor="#ed9aff" //(Optional)
                railBackgroundColor="#bbeaa6" //(Optional)
                railBorderColor="#bbeaff" //(Optional)
              />
        </View>
     
      )
 
  }
 
  THREE=()=>{
 
    return (
      
        <View className="btn">
        <Text style={styles.text}>Are you working out today??</Text>
            <SwipeButton 
                disabled={false}
                //disable the button by doing true (Optional)
                swipeSuccessThreshold={70}
                height={45}
                //height of the button (Optional)
                width={330}
                //width of the button (Optional)
                title="Swipe if YES"
                
                onSwipeSuccess={() => {
                  console.log('Submitted Successfully!');
                }}
                //After the completion of swipe (Optional)
                railFillBackgroundColor="#e688a1" //(Optional)
                railFillBorderColor="#e688ff" //(Optional)
                thumbIconBackgroundColor="#ed9a73" //(Optional)
                thumbIconBorderColor="#ed9aff" //(Optional)
                railBackgroundColor="#bbeaa6" //(Optional)
                railBorderColor="#bbeaff" //(Optional)
              />
        </View>
 
    )}
 
  FOUR=()=>{
 
    return (
      
        <View className="btn">
          <Text style={styles.text}>Are you taking your shirt off in public?</Text>
              <SwipeButton 
                  disabled={false}
                  //disable the button by doing true (Optional)
                  swipeSuccessThreshold={70}
                  height={45}
                  //height of the button (Optional)
                  width={330}
                  //width of the button (Optional)
                  title="Swipe if Yes"
                
                  onSwipeSuccess={() => {
                    console.log('Submitted Successfully!')
                  }}
                  //After the completion of swipe (Optional)
                  railFillBackgroundColor="#e688a1" //(Optional)
                  railFillBorderColor="#e688ff" //(Optional)
                  thumbIconBackgroundColor="#ed9a73" //(Optional)
                  thumbIconBorderColor="#ed9aff" //(Optional)
                  railBackgroundColor="#bbeaa6" //(Optional)
                  railBorderColor="#bbeaff" //(Optional)
                />
          </View>
 
    )}
  


function ButtonOne() {

}

export default function Form() {
  return (
    //i think possibly turn each button into a function for conditional rendering
    <SafeAreaView style={styles.body}>
     <ONE />
     <TWO />
     <THREE />
     <FOUR />
     <Button title="Done" onPress={() => console.log('Form Complete!')} />
      
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  btn: {
    
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
    
  },
});
