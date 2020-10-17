import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Editor from "components/Editor";

import { Flex } from "bumbag";
import {
  useGetLessonQuery,
  Enum_Lesson_Status,
  useUpdateLessonContentMutation,
} from "graphqlTypes";
import PageWithHeader from "components/layout/withHeader";

export default function CourseList() {
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
  if (loading) return "загрузка";
  const handleChange = (content) => {
    updateContent({ variables: { id, content } });
  };
  return (
    <PageWithHeader>
      <Flex padding="major-2" flexBasis="30%" flexDirection="column">
        <Editor onChange={handleChange} initialContent={data.lesson.content} />
      </Flex>
    </PageWithHeader>
  );
}
