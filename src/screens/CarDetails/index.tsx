import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

import { getAccessoryItem } from "../../Utils/getAccessoryIcon";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Descripton,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";
import { CarDTO } from "../../components/dtos/CarDTO";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmCar() {
    navigation.navigate("Scheduling");
  }
  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider imageUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Descripton>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Descripton>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryItem(accessory.type)}
            />
          ))}
        </Accessories>
        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher Período de aluguel"
          onPress={handleConfirmCar}
        />
      </Footer>
    </Container>
  );
}
