import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HomeContainer = styled.div`
  display: flex;
  /* align-items: center; */
  background-color: ${colors.colorWhite};
  /* height: 100vh; */
`;

export const HomeRight = styled.div`
  flex: 0.25;
  width: 100%;
`;

export const HomeLeft = styled.div`
  flex: 0.75;
  padding: 0 10px;
`;

export const Statistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  max-height: 400px;
  gap: 10px;

  margin: 10px 0;
`;

export const ShopBackground = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 360px;
`;

export const SocialOverview = styled.div`
  flex: 0.75;
  padding: 10px;
  background: ${colors.colorGray};
  border-radius: 15px;
  display: flex;
  align-items: center;
  /* height: 100; */
`;

export const Overview = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  /* position: relative; */
  /* height: 100%; */
  flex: 0.35;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.colorWhite};
  border-radius: 15px;
  padding: 10px;
`;

export const OverviewCard = styled.div`
  /* position: absolute; */
  /* left: 0px; */
  /* right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  bottom: 0; */
  /* transform: translate(-50%, 0%); */
  /* padding: 10px; */
  background: ${colors.colorWhite};
  /* width: calc(100% - 20px); */
  border-radius: 15px;
  /* flex: 0.25; */
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  text-align: center;
  /* height: 150px; */
  position: relative;
  /* min-height: 100% !important; */
`;

export const Appoinment = styled.div`
  display: flex;
  /* align-items: center; */
  margin: 20px 0;
`;

export const DateTimePicker = styled.div`
  flex: 0.4;
  padding: 0 !important;
  text-align: center;
`;
