import React, { useEffect } from "react";
import style from 'styled-components';
import { Button } from 'bumbag';
import Link from "next/link";

const StyledLessonHeader = style.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #E0E0E0;
`

const StyledInput = style.div`
    margin: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;      
    color: #333333;
    cursor: pointer;
`

const StyledBlockStatus = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledBlockButton = style.div`

`

const LessonHeader = ({ fun }) => {
    function handleClick(type: string) {
        fun(type)
    }
    return(
        <StyledLessonHeader>
            <StyledBlockStatus> 
                <StyledInput onClick={() => handleClick('Draft')}>
                    Черновики
                </StyledInput>
                <StyledInput onClick={() => handleClick('Fix')}>
                    Исправить
                </StyledInput>
                <StyledInput onClick={() => handleClick('Check')}>
                    На проверке
                </StyledInput>
                <StyledInput onClick={() => handleClick('Complete')}>
                    Завершено
                </StyledInput>
            </StyledBlockStatus>
                <Link href='/author'>  
                    <StyledBlockButton>
                        <Button palette="primary">
                            + Создать
                        </Button>
                    </StyledBlockButton>
                </Link>
        </StyledLessonHeader>
    )
}

export default LessonHeader;