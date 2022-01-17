import { Box, Text } from 'native-base'
import React from 'react'
import { Image, ListRenderItemInfo, View } from 'react-native'
import IMovie from 'types/object/IMovie'

interface Props {
    movie: ListRenderItemInfo<IMovie>   
}

const MovieCard = (props: Props) => {
    const {movie} = props
    return (
        <Box>
        { movie.item.backdrop_path !== 'null' && (
          <Image
            resizeMode="cover"
            key={movie.item.backdrop_path}
            source={{
              uri:
                'https://image.tmdb.org/t/p/original' +
                movie?.item.backdrop_path,
            }}
            // alt="Some thing wrong"
            // size="xl"
            style={{
              width:260,
              height:300,
              borderWidth:2,
              borderColor:'#d35647',
              resizeMode:'contain',
              margin:8
          }}
            
          />
        )}

        <Text>{movie.item.title ?? 'null'}</Text>
        {/* <Text>{movie.item.backdrop_path}</Text> */}
      </Box>
    )
}

export default MovieCard
