/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import KakaoLoginBtn from './KakaoLoginBtn';


class App extends React.Component{
  render(){
      return(
          <View style={styles.container}>
              <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                  <KakaoLoginBtn/>
              </ScrollView>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
})
export default App;
