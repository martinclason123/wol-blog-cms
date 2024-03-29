import styled from "styled-components";

const Svg = styled.svg`
  transform: ${(props) => (props.active ? "rotate(0deg)" : "rotate(-90deg)")};
  width: 1.5em;
  transition: transform 0.2s ease-in-out;
`;
const Chevron = ({ active }) => {
  return (
    <Svg viewBox="0 0 20 20" active={active}>
      <path
        fill-rule="evenodd"
        d="M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
      ></path>
    </Svg>
  );
};

export default Chevron;
