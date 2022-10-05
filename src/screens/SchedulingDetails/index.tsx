import React from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../styles';

import {getAccessoryIcon} from '../../Utils/getAccessoryIcon';
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
import { CarDTO } from "../../components/dtos/CarDTO";

interface Params {
  car: CarDTO;
}

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmDetails(){
    navigation.navigate('SchedulingComplete')
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
          car.accessoty.map(accessory => (
            <Accessory 
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)} 
              />
          ))
         
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
