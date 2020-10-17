import React, { useEffect, useRef } from "react";
import MediumEditor from "medium-editor";
import styled from "styled-components";

import { Flex } from "bumbag";

const Editor = styled.div`
  outline: none;
  width: 620px;
  max-width: 620px;
  margin: auto;
  min-height: 400px;
`;

const emptyTemplate = `<h2>Главный заголовок</h2><p>Начните вводить описание</p>`;

export interface EditorProps {
  onChange: (data: any) => any;
  initialContent: string;
}

const OurMediumEditor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
}) => {
  const refEditor = useRef();
  useEffect(() => {
    refEditor.current = new MediumEditor(".editor", {});
    refEditor.current.subscribe("editableInput", (e, el) => {
      onChange(el.innerHTML);
    });
  }, []);
  return (
    <Flex flexDirection="column">
      <Editor
        className="editor"
        dangerouslySetInnerHTML={{ __html: initialContent || emptyTemplate }}
      />
    </Flex>
  );
};

export default OurMediumEditor;
