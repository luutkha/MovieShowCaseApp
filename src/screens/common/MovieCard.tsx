import { Box, Image, Text } from 'native-base'
import React from 'react'
import { ListRenderItemInfo, View } from 'react-native'
import IMovie from 'types/object/IMovie'

interface Props {
    movie: ListRenderItemInfo<IMovie>   
}

const MovieCard = (props: Props) => {
    const {movie} = props
    return (
        <Box>
        {/* { movie.item.backdrop_path !== 'null' && (
          <Image
            resizeMode="cover"
            source={{
              uri:
                'https://image.tmdb.org/t/p/original' +
                movie?.item.backdrop_path,
            }}
            alt="Some thing wrong"
            size="xl"
            
          />
        )} */}

        <Text>{movie.item.title ?? 'null'}</Text>
        {/* <Text>{movie.item.backdrop_path}</Text> */}
      </Box>
    )
}

export default MovieCard
