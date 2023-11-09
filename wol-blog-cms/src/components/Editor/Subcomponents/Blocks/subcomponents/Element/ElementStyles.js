import styled from "styled-components";
import theme from "@/styles/theme";

export const ElementContainer = styled.li`
  list-style: none;
  text-align: right;
  margin-left: 20%;
  padding: 0.2em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  background: ${(props) => (props.active ? theme.colors.darkGrey : "none")};
  width: 80%;
`;

export const ElementTitle = styled.h3`
  font-size: inherit;
  font-weight: 400;
  padding-left: 0.5em;
  width: fit-content;
  white-space: nowrap;
`;
