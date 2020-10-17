import React from 'react';
import style from 'styled-components';
import Link from 'next/link';

const StyledCourseList = style.div`
	display: flex;
	height: 100%;
`
const StyledBlock = style.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background: linear-gradient(180deg, #5F5FE3 0%, #2B2BB3 100%);
	cursor: pointer;

	h3 {
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 48px;
		line-height: 54px;
		color: #FFFFFF;
		opacity: 0.5;
	}

	&:hover {
		h3 {
			opacity: 1;
		}
	}
`

const StyledSplit = style.div`
	width: 1px;
	background: #FCFCFD;
	opacity: 0.12;
`

const Block = ({ role }) => {
	return(
		<StyledBlock>
			<h3>
				{role}
			</h3>
		</StyledBlock>
	)
}

const CourseList = () => {
  return (
	  	<StyledCourseList>
			<Link href="/author/index" as='/author/index'>
				<Block role="Я автор" />
			</Link>
			<StyledSplit />
			<Link href="/pageTest/viewReports" as='/pageTest/viewReports'>
				<Block role="Я редактор" />
			</Link>
		</StyledCourseList>
  	);
}

export default CourseList;