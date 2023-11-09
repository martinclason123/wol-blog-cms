// Element.js
import { ElementContainer, ElementTitle } from "./ElementStyles";
import Icons from "@/Icons/Icons";

const Element = ({ active, element, onToggleActive }) => {
  return (
    <ElementContainer active={active} onClick={onToggleActive}>
      <Icons type={element.type} />
      <ElementTitle>{element.title}</ElementTitle>
    </ElementContainer>
  );
};

export default Element;
