import React, { useEffect, useState } from "react";
import { Spinner } from "bumbag";
import { useRouter } from "next/router";
import Editor from "components/Editor";

import { Box, Flex, Heading } from "bumbag";
import {
  useGetLessonQuery,
  Enum_Lesson_Status,
  useUpdateLessonContentMutation,
} from "graphqlTypes";
import PageWithHeader from "components/layout/withHeader";
import LessonHeader from "components/layout/LessonHeader";
import { LessonComponenProps } from "./Check";

const DescriptionComponent: React.FC<LessonComponenProps> = (props) => {
  const {
    query: { id },
  } = useRouter();
  const [content, setContent] = React.useState<string>("");
  const { data, error, loading } = useGetLessonQuery({
    variables: {
      id: id as string,
    },
  });
  const [
    updateContent,
    { data: updateContentData },
  ] = useUpdateLessonContentMutation();

  if (error) return "ошибка";
  if (loading)
    return (
      <LessonHeader id={id}>
        <Spinner fontSize="50px" />
      </LessonHeader>
    );

  const handleChange = (content) => {
    updateContent({ variables: { id, content } });
  };
  return (
    <LessonHeader {...props} id={id}>
      <Heading
        cursor="default"
        marginTop="68px"
        marginBottom="40px"
        maxWidth="620px"
        use="h2"
      >
        {data.lesson.title}
      </Heading>
      <Flex padding="major-2" flexBasis="30%" flexDirection="column">
        <Editor onChange={handleChange} initialContent={data.lesson.content} />
      </Flex>
    </LessonHeader>
  );
};

export default DescriptionComponent;
