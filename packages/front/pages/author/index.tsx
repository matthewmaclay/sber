import React, { useState } from "react";
import style from 'styled-components';
import Link from "next/link";
import LessonHeader from '../../src/components/lessonHeader/LessonHeader';

import { Flex, Box } from "bumbag";
import { useGetLessonsQuery, Enum_Lesson_Status } from "graphqlTypes";

const StyledCourseList = style.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;	
`

const StyledHeader = style.div`
	width: 80%;
	margin-top: 47px;
`

const StyledCars = style.div`
	margin-top: 64px;
	width: 80%;
	cursor: pointer;

	.Card:hover {
		background: #FCFCFD;
		box-shadow: 1px 2px 24px rgba(0, 0, 0, 0.15);
	}
`

const StyledLinks = style.div`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	margin: 35px 62px 70px 13px;

	color: #000000;
`

const StyledStatus = style.div`
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	color: #000000;
	margin-left: 13px;

	data {
		color: #27AE60
	}
`

export default function CourseList() {
	const [choseType, setType] = useState("");
	const { data, error, loading } = useGetLessonsQuery({
		variables: {
			status: Enum_Lesson_Status[choseType],
		},
	});

	function handleClick(type) {
		setType(type)
	}
	if (error) return "ошибка";
	if (loading) return "загрузка";
	return (
		<StyledCourseList>
			<StyledHeader>
				<LessonHeader fun={handleClick}/>
			</StyledHeader>
			<StyledCars >
				<Flex flexDirection="row" flexWrap="wrap">
					{data.lessons.map((i) => (
						<Link href={`/author/lesson/${i.id}`}>
							<Box width="240px" 
								height="196px" 
								margin="23px" 
								background="#FCFCFD"
								box-shadow="1px 2px 6px rgba(0, 0, 0, 0.12)"
								borderRadius="8px"
								className="Card"
							>
									<>
										<StyledLinks>
											{i.title}
										</StyledLinks>
										<StyledStatus>
											Завершить <data>20 октября</data>		
										</StyledStatus>
									</>
							</Box>
						</Link>
					))}
				</Flex>
			</StyledCars>
		</StyledCourseList>
	);
}
