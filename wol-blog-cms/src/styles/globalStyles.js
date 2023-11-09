import styled from "styled-components";
import theme from "./theme";

export const Container = styled.section`
  font-size: 1.563vw;
  position: relative;
  @media (min-width: ${theme.breakpoints.medium}) {
    font-size: 0.521vw;
  }
`;
