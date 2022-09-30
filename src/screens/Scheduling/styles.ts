import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroud_secundary};
`;
export const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.Secundary_600};
  font-size: ${RFValue(34)}px;
  margin-top: 25px;
 

`;
export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  margin: 2px 0;
`;
export const DataInfo = styled.View`
  width: 30%;
`;
export const DataTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text1};
  font-family: ${({ theme }) => theme.fonts.Secundary_500};
  font-size: ${RFValue(10)}px;
`;
export const DataValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.Primery_500};
  font-size: ${RFValue(15)}px;

  ${({ selected, theme }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text1};
      padding-bottom: 5px;
    `};
`;
export const Content = styled.ScrollView.attrs({
  contentContainerStyle:{
    paddingBottom:24
  },
  showsVerticalScrollIndicator: false
})``;
export const Footer = styled.View`
padding: 24px;
`;