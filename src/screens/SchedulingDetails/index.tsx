import React, {useState, useEffect} from "react";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import {useNavigation, useRoute} from '@react-navigation/native';
import { format } from "date-fns";


import {getAccessoryItem} from '../../Utils/getAccessoryIcon';
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
import { getPlataformDate } from "../../Utils/getPlataformDate";
import {api} from '../../Services/api';
import { Alert } from "react-native";

interface Params {
  car: CarDTO;
  dates: string[];
}
interface RentalPeriod{
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);

  async function handleConfirmDetails(){
    const schedulesByCar = await api.get(`/schedules/${car.id}`);

    const unavailable_dates =[
      ...schedulesByCar.date.unavailable_dates,
      ...dates,
    ];

    api.push(`/schedules/${car.id}`,{
      id: car.id,
      unavailable_dates
    })
    .then(() => navigation.navigate('SchedulingComplete'))
    .catch(()=> Alert.alert('Não foi possível confirmar o agendamento.'))

    
  }

  function handleBack() {
    navigation.goBack();
  }
  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(new Date(dates[0])),'dd/MM/yyyy'),
      end: format(getPlataformDate(new Date(dates[dates.length -1])),'dd/MM/yyyy'),
    })
  },[])
  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider
          imageUrl={car.photos}
        />
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
          {
          car.accessories.map(accessory => (
            <Accessory 
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryItem(accessory.type)} 
              />
          ))
        }
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
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text1}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RendalPriceDetails>
            <RendalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RendalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RendalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Alugar agora" color={theme.colors.seccess} onPress={handleConfirmDetails}/>
      </Footer>
    </Container>
  );
}
