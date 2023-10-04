import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is profile screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
