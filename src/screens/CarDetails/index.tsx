import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import {useNavigation} from '@react-navigation/native'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import PeopleSvg from '../../assets/people.svg'
import ExchangeSvg from '../../assets/exchange.svg'

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

export function CarDetails() {
  const navigation = useNavigation();
  
  function handleConfirmCar(){
    navigation.navigate('Scheduling');
  }

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
        <Accessories>
          <Accessory name='380Km/h' icon={SpeedSvg}/>
          <Accessory name='3.2' icon={AccelerationSvg}/>
          <Accessory name='800 HP' icon={ForceSvg}/>
          <Accessory name='Gasolina' icon={GasolineSvg}/>
          <Accessory name='Auto' icon={ExchangeSvg}/>
          <Accessory name='2 Pessoas' icon={PeopleSvg}/>
        </Accessories>
        <About>Texto aqui</About>
      </Content>

      <Footer>
        <Button title="Escolher Período de aluguel" onPress={handleConfirmCar}/>
      </Footer>
    </Container>
  );
}
