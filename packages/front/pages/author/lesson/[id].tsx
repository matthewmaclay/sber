import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Flex } from "bumbag";
import { useGetLessonQuery, Enum_Lesson_Status } from "graphqlTypes";

export default function CourseList() {
  const {
    query: { id },
  } = useRouter();

  const { data, error, loading } = useGetLessonQuery({
    variables: {
      id: id as string,
    },
  });
  if (error) return "ошибка";
  if (loading) return "загрузка";
  console.log(data);
  return (
    <Flex padding="major-2" flexBasis="30%" flexDirection="column">
      контент:{data.lesson.content}
      <br />
      status:{data.lesson.status}
    </Flex>
  );
}
