import {AnyTxtRecord} from 'dns';
import {Button, Center, HStack, Stack, Text, View} from 'native-base';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';

interface Props {
  navigation: any;
}

export const HomeDetails = (props: Props) => {
  const {navigation} = props;

  return (
      <Center>
        <Text>Details</Text>

        <Button
          // size="sm"
          colorScheme="secondary"
          backgroundColor="warning.500"
          onPress={() => navigation.push('Details')}>
          Go to Detail
        </Button>
        <Button
          // size="sm"
          colorScheme="secondary"
          backgroundColor="warning.500"
          onPress={() => navigation.goBack()}>
          Go back
        </Button>
        <Button
          // size="sm"
          colorScheme="secondary"
          backgroundColor="warning.500"
          onPress={() => navigation.popToTop()}>
          Go to 1st
        </Button>
        <Stack space={3} alignItems="center">
          <HStack space={3} alignItems="center">
            <SharedElement id="image">
            <Center h="40" w="200" bg="primary.500" rounded="md" shadow={3} />
            </SharedElement>
          
          </HStack>
        </Stack>
      </Center>
  );
};
