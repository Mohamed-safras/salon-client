import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const ProfilePic = styled.div``;

export const UserDetails = styled.div`
  margin: 0 10px;
  span {
    font-size: 10px;
    color: ${colors.colorGrayDark};
    font-weight: 500;
  }
`;
export const Email = styled.span`
  font-size: 10px;
  font-weight: 500;
`;
export const UserName = styled.h1`
  font-size: 14px;
  font-weight: 700;
`;
