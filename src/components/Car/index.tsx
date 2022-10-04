import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { CarDTO } from "../../components/dtos/CarDTO";
import { getAccessoryItem } from "../../Utils/getAccessoryIcon";

import {
  Container,
  Detail,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryItem(data.fuel_type);
  return (
    <Container {...rest}>
      <Detail>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Detail>
      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
