import React, { useEffect } from "react";
import MediumEditor from "medium-editor";
import styled from "styled-components";

import { Flex } from "bumbag";

const Editor = styled.div`
  outline: none;
  width: 100%;
  max-width: 600px;
  margin: auto;
  min-height: 400px;
  border: 1px solid #33333322
`;

export default function CourseList() {
  useEffect(() => {
    console.log("hi useeffect");
    var editor = new MediumEditor(".editor", {
      // options go here
    });
  }, []);
  return (
    <Flex flexDirection="column">
        <Editor className='editor' />
    </Flex>
  );
}
