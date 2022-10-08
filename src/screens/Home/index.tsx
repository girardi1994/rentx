import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation} from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
import api from "../../Services/api";
import { CarDTO } from "../../components/dtos/CarDTO";
import { Load } from "../../components/Load";
import Logo from "../../assets/logo.svg";

import { Container, Header, TotalCars, HeaderContent, CarList, MyCarsButton } from "./styles";
import { Car } from "../../components/Car";
import { useTheme } from "styled-components";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }
  function handleOpenMyCar() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total 06 Carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <MyCarsButton onPress={handleOpenMyCar}>
        <Ionicons 
        name="ios-car-sport"
        size={32}
        color={theme.colors.shape}
        
        />
      </MyCarsButton>
    </Container>
  );
}
