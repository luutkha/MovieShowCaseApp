import {Button, Center, Text} from 'native-base';
import React from 'react';

interface Props {
  navigation: any;
}

export const ProductHome = (props: Props) => {
  const {navigation} = props;
  return (
    <Center>
      <Text>product Home</Text>
      <Button
        // size="sm"
        colorScheme="secondary"
        backgroundColor="warning.500"
        onPress={() =>
          navigation.navigate('product1', )
        }>
        Go to Product 1
      </Button>
      <Button
        // size="sm"
        colorScheme="secondary"
        backgroundColor="warning.500"
        onPress={() =>
          navigation.navigate('product2', )
        }>
        Go to Product 2
      </Button>
    </Center>
  );
};
