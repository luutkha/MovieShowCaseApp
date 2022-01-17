import {Box, HStack, Icon, IconButton} from 'native-base';
import React from 'react';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props {
  navigation: any;
}

const AppBar = (props: Props) => {
  const {navigation} = props;
  const {canGoBack, goBack, navigate} = navigation;
  const isCanGoBack = canGoBack();

  return (
    <HStack backgroundColor="warning.500">
      {isCanGoBack && (
        <IconButton
          onPress={() => navigation.goBack()}
          icon={
            <Icon
              size="sm"
              as={<Entypo name="chevron-left" />}
              color="white"
            />
          }
        />
      )}
    </HStack>
  );
};

export default AppBar;
