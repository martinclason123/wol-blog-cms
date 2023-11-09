"use client";
import { BlocksContainer, BlocksList } from "./BlocksStyles";
import Block from "./subcomponents/Block/Block";
import { MainBanner } from "./modules";

const blockData = ["Main banner", "Full margin image"];
const Blocks = () => {
  const active = true;
  return (
    <BlocksContainer>
      <BlocksList>
        <MainBanner />
      </BlocksList>
    </BlocksContainer>
  );
};
export default Blocks;
