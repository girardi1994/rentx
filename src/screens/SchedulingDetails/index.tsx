import React from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import {useNavigation} from '@react-navigation/native'
import {theme} from '../styles'

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import PeopleSvg from "../../assets/people.svg";
import ExchangeSvg from "../../assets/exchange.svg";

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RendalPriceDetails,
  RendalPriceQuota,
  RentalPriceTotal,
} from "./styles";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmDetails(){
    navigation.navigate('SchedulingComplete')
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
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="3.2" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 Pessoas" icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text1}
          />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RendalPriceDetails>
            <RendalPriceQuota>R$ 580 x3 diárias</RendalPriceQuota>
            <RentalPriceTotal>R$ 2900</RentalPriceTotal>
          </RendalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Alugar agora" color={theme.colors.seccess} onPress={handleConfirmDetails}/>
      </Footer>
    </Container>
  );
}
