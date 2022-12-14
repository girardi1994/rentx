import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles';

interface Props extends RectButtonProps{
  title: string,
}

export function ComfirmButton({
  title,
  ...rest
}: Props){
   return (
     <Container {...rest}>
      <Title>OK</Title>

     </Container>
  );
}