import React, { useEffect } from "react";
import Link from "next/link";
import LessonHeader from '../../src/components/lessonHeader/LessonHeader';

import { Flex } from "bumbag";
import { useGetLessonsQuery, Enum_Lesson_Status } from "graphqlTypes";

export default function CourseList() {
	const { data, error, loading } = useGetLessonsQuery({
		variables: {
		status: Enum_Lesson_Status[""],
		},
	});
	if (error) return "ошибка";
	if (loading) return "загрузка";
	return (
		<Flex padding="major-2" flexBasis="30%" flexDirection="column">
			<LessonHeader />
			{data.lessons.map((i) => (
				<Link href={`/author/lesson/${i.id}/description`}>{i.title}</Link>
			))}
		</Flex>
	);
}
