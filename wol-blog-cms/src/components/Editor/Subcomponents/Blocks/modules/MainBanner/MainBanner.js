// import { Block } from "@/components/Editor/Subcomponents";

import { Block } from "../../subcomponents";

const MainBanner = () => {
  return (
    <Block
      name="Main Banner"
      elements={[
        { type: "image", title: "Banner Image" },
        { type: "text", title: "Banner Text" },
      ]}
    />
  );
};

export default MainBanner;
