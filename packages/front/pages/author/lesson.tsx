import React from 'react';
import style from 'styled-components';

const StyledIndexPage = style.div`
	display: flex;
	height: 100%;
`

const StyledBlockRole = style.div`
	display: flex;
	background: linear-gradient(180deg, #5F5FE3 0%, #2B2BB3 100%);
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 50%;
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
	background-color:rgba(225, 225, 225, 1);
`

const BlockRole = ( { role } ) => {
	return(
		<StyledBlockRole>
			<h3>
				{role}
			</h3>
		</StyledBlockRole>
	)
}

const IndexPage = () => {
	return(
		<StyledIndexPage>
			<BlockRole role="Я автор" />
			<StyledSplit />
			<BlockRole role="Я редактор" />
		</StyledIndexPage>
	)
}

export default IndexPage
