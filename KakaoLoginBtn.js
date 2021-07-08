import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const KakaoLoginBtn = () => {
  const onPress = () => {
    console.log('on Press');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>카카오 로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FEE500',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
