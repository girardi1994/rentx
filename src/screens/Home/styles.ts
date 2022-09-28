import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
flex: 1;
background-color: ${({theme})=> theme.colors.backgroud_primary};
`;  
export const Header = styled.View`
width: 100%;
height: 113px;
background-color: ${({theme})=> theme.colors.header};

justify-content: flex-end;
padding: 32px 24px;
`;
export const TotalCars = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({theme})=> theme.fonts.Primery_400};
color: ${({theme})=> theme.colors.text1};
`;
export const HeaderContent = styled.View`
align-items: center;
flex-direction: row;
justify-content: space-between;
`;
export const CarList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding: 24
  },
  showsVerticalScrollView: false
})``;