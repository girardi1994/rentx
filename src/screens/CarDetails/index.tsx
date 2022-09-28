import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

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
  } from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imageUrl={[
            "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Descripton>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Descripton>

          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <About>
          Texto aqui 
        </About>
      </Content>
    </Container>
  );
}
