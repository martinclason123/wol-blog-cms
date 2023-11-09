"use client";
import { useState } from "react";
import { BlockContainer, BlockElements } from "./BlockStyles";
import { Chevron } from "@/svgs";
import { Element } from "../../subcomponents";

const Block = ({ name, elements }) => {
  const [active, setActive] = useState(false);
  const [activeElement, setActiveElement] = useState(null);

  const toggleActive = () => {
    setActive(!active);
  };

  const toggleElementActive = (index) => {
    setActiveElement(index === activeElement ? null : index);
  };

  return (
    <>
      <BlockContainer active={active} onClick={toggleActive}>
        <Chevron active={active} />
        {name}
      </BlockContainer>
      {active && (
        <BlockElements>
          {elements.map((element, index) => (
            <Element
              key={index}
              active={index === activeElement}
              element={element}
              onToggleActive={() => toggleElementActive(index)}
            />
          ))}
        </BlockElements>
      )}
    </>
  );
};
export default Block;
