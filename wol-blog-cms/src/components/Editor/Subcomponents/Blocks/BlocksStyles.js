import styled from "styled-components";

import { Container } from "../../../../styles/globalStyles";
import theme from "@/styles/theme";

export const BlocksContainer = styled(Container)`
  border: 1px solid ${theme.colors.grey};
  height: 100vh;
  width: 20%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const BlocksList = styled.ul`
  width: 80%;
`;
