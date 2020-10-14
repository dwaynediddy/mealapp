import React from 'react'
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
} from 'react-native';
import { color } from 'react-native-reanimated'
import SwipeButton from 'rn-swipe-button'
import colors from '../colors'


function ButtonOne() {
  return ( 
<SafeAreaView style={styles.body}>
  <View>
          <Text style={styles.text}>Are you bulking? </Text>
        <SwipeButton className="btn-1"
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
  </SafeAreaView>
  )
}

export default function Form() {
  return (
    //i think possibly turn each button into a function for conditional rendering
    <SafeAreaView style={styles.body}>
     <ButtonOne />

          <Text style={styles.text}>Are you bulking? </Text>
        <SwipeButton className="btn-1"
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
          <Text style={styles.text}>Is summer coming?</Text>
        <SwipeButton className="btn-2"
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
          <Text style={styles.text}>Are you working out today??</Text>
        <SwipeButton className="btn-3"
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
          <Text style={styles.text}>Are you taking your shirt off in public?</Text>
        <SwipeButton className="btn-4"
            disabled={false}
            //disable the button by doing true (Optional)
            swipeSuccessThreshold={70}
            height={45}
            //height of the button (Optional)
            width={330}
            //width of the button (Optional)
            title="Swipe if Yes"
            //Text inside the button (Optional)
            //thumbIconImageSource={thumbIcon}
            //You can also set your own icon for the button (Optional)
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
          <Button title="Done" onPress={() => console.log('Form Complete!')} />
      
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
    
  },
});
