"use client";
import {
  EditorContainer,
  BlocksContainer,
  PreviewContainer,
  DetailsContainer,
} from "./EditorStyles";
import { Blocks, Preview, Details } from "./Subcomponents";

const Editor = () => {
  return (
    <EditorContainer>
      <BlocksContainer>
        <Blocks />
      </BlocksContainer>
      <PreviewContainer>
        <Preview />
      </PreviewContainer>
      <DetailsContainer>
        <Details />
      </DetailsContainer>
    </EditorContainer>
  );
};

export default Editor;
