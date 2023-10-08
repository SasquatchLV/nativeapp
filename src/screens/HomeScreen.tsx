import React from 'react';
import MovieList from '../components/MovieList';
// import type {PropsWithChildren} from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// const AwesomeIcon = () => (
//   <Icon type="material" name="autorenew" color="#00aced" />
// );

function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <MovieList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default HomeScreen;
