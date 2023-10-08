import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Card, Button} from '@rneui/themed';
import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQwZTE4NjQ0YWYzOGEzY2Y2NGYwYmNhYjNiYmM5NSIsInN1YiI6IjYxNDc4ZmM0NjA5NzUwMDAyYTQzYWRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UEznc94-xvTY-0nBX8hxnrc2TbSI3Lfrqp5WqW58EAk'; // Replace with your actual API key
const API_URL = 'https://api.themoviedb.org/3/movie/popular';

interface MovieItem {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieApiResponse {
  page: number;
  results: MovieItem[];
  // Include other properties from the API response if needed
}

const MovieList = (): JSX.Element => {
  const [movies, setMovies] = useState<MovieItem[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: 'en-US',
          page: 1,
        },
      });

      const movieResults = response.data.results;
      setMovies(movieResults);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovieCard = ({item}) => (
    <View style={styles.cardContainer}>
      <Card containerStyle={styles.card}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
        />
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.movieOverview}>
          {item.overview}
        </Text>
        <Button title="VIEW NOW" onPress={() => console.log('Push')} />
      </Card>
    </View>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderMovieCard}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // You can adjust the number of columns as needed
      columnWrapperStyle={styles.columnWrapper} // Adjust the column layout
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginBottom: 16, // Add some margin between cards
  },
  card: {
    height: 400, // Set a fixed height for each card
    // You can adjust this value as needed
  },
  container: {
    flex: 1,
  },
  movieOverview: {
    fontSize: 12,
    marginTop: 24,
    marginBottom: 24,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Ensure equal spacing between columns
  },
});

export default MovieList;
