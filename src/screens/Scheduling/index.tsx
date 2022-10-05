import React, { useState } from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { StatusBar, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";
import { getPlataformDate } from "../../Utils/getPlataformDate";
import { CarDTO } from "../../components/dtos/CarDTO";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DataInfo,
  DataTitle,
  DataValue,
  Content,
  Footer,
} from "./styles";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}
interface Params {
  car: CarDTO;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert("Seleciona o intervalo para alugar.");
    } else {
      navigation.navigate("SchedulingDetails", {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }
  function handleBack() {
    navigation.goBack();
  }
  function handleChangeDate(date: DayProps) {
    console.log(date);
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp){
      start = end;
      end = start;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlataformDate(new Date(firstDate),'dd/MM/yyyy')),
      endFormatted: format(getPlataformDate(new Date(endDate),'dd/MM/yyyy')),
    })
  }
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>
          Escolha uma{"\n"}
          data de início e{"\n"}
          fim de aluguel
        </Title>
        <RentalPeriod>
          <DataInfo>
            <DataTitle>DE</DataTitle>
            <DataValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DataValue>
          </DataInfo>
          <ArrowSvg />
          <DataInfo>
            <DataTitle>ATÉ</DataTitle>
            <DataValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DataValue>
          </DataInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar marketDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
