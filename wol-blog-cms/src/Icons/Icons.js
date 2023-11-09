import { Chevron, ImageIcon, TextIcon } from "@/svgs";

const Icons = ({ type }) => {
  switch (type) {
    case "image":
      return <ImageIcon />;
    case "text":
      return <TextIcon />;
    default:
      return <Chevron />;
  }
};

export default Icons;
