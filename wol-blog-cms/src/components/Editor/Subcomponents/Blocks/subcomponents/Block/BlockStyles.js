import theme from "@/styles/theme";
import styled from "styled-components";

export const BlockContainer = styled.li`
  font-size: 1.8em;
  list-style: none;
  padding: 0.5em 0 0.5em 0.5em;
  border-radius: 0.5em;
  background: ${(props) => (props.active ? theme.colors.darkGrey : "none")};
  font-family: "Inter", sans-serif;
  color: rgb(48, 48, 48);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BlockElements = styled.ul`
  font-size: 1.8em;
  list-style: none;
  padding: 0.5em 0 0.5em 0.5em;
  border-radius: 0.5em;
  background: ${(props) => (props.active ? theme.colors.darkGrey : "none")};
  font-family: "Inter", sans-serif;
  color: rgb(48, 48, 48);
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  cursor: pointer;
`;
