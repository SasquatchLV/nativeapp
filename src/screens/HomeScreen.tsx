import React from 'react';
// import type {PropsWithChildren} from 'react';
import {Button} from '@rneui/base';
import {Icon} from '@rneui/themed';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const AwesomeIcon = () => (
  <Icon type="material" name="autorenew" color="#00aced" />
);

function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionDescription]}>This is a text</Text>
          <Button title="Press if gay" />
          <AwesomeIcon />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16, // Adjust the padding as needed
  },
  sectionContainer: {
    paddingHorizontal: 8, // Adjust horizontal padding for sections
    paddingBottom: 16, // Add bottom padding as needed
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default HomeScreen;
