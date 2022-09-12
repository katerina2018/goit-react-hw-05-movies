import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieCartWrapper = styled.div`
  display: flex;
  >
`;

export const ImgWrapper = styled.div`

margin-right: 20px;
  
`;
export const AdditionalLinkWrapper = styled.ul`

display: flex;
list-style: none;
border-bottom: 1px solid black;
padding-bottom: 20px;
  
`;


export const AdditionalLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
  &:hover {
    text-decoration: underline;
    
  }
`;

