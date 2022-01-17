import SearchAPI from 'apis/search-api';
import {
  Box,
  Button,
  FlatList,
  HStack,
  Image,
  ScrollView,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import MovieCard from 'screens/common/MovieCard';
import {PaginationParams} from 'types';
import IMovie from 'types/object/IMovie';
import { SearchActions } from './SearchSlice';

interface Props {
  navigation: any;
}

export const Home = (props: Props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();

  // const [listMovie, setlistMovie] = useState<IMovie[]>([]);
  const listMovie = useAppSelector(state => state.search.data.results)
  const getListMovie = async (page: number) => {
    let params: PaginationParams = {
      page: page,
      query: 'Captain',
      limit: 20,
    };
    dispatch(SearchActions.fetchSearchResultListWhenSearch(params))
  };
  useEffect(() => {
    // dispatch(SearchActions.fetchSearchList())
  }, [])
  return (
    <ScrollView>
      <VStack style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is home page</Text>
        <Text>{listMovie.length}</Text>
          
        <HStack>
          <Button onPress={() => getListMovie(1)}>Call API PAGE - 01</Button>
          <Button onPress={() => getListMovie(2)}>Call API PAGE - 02</Button>
          <Button
            colorScheme="secondary"
            backgroundColor="warning.500"
            onPress={() => navigation.navigate('product2')}>
            Go to Product 2
          </Button>
        </HStack>
          <Box>
            <HStack space={0} flexWrap={'wrap'}>
              {listMovie.length > 0 && (
                <FlatList
                  // horizontal
                  data={listMovie}
                  renderItem={movie => (
                    <MovieCard movie={movie}/>
                  )}
                  keyExtractor={movie => movie.id + ''}
                />
              )}
            </HStack>
          </Box>
      </VStack>
    </ScrollView>
  );
};
