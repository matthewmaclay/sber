import React, { useState } from "react";
import style from 'styled-components';
import { Button } from 'bumbag';
import Link from "next/link";

const StyledLessonHeader = style.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #E0E0E0;

    .name.selected {
        color: #5454E2;
    }
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

    const [choseType, setType] = useState();
    console.log(`name ${name == 'Check' ? "selected" : ""}`)

    function choseTypeReq(name) {
        setType(name)
    }

    function handleClick(type: string) {
        fun(type)
    }
    return(
        <StyledLessonHeader>
            <StyledBlockStatus> 
                <StyledInput 
                    className={`name ${choseType == 'All' ? "selected" : ""}`}
                    onClick={() => {
                    choseTypeReq('All')
                    handleClick('')
                    }}>
                    Все
                </StyledInput>
                <StyledInput 
                    className={`name ${choseType == 'Draft' ? "selected" : ""}`}
                    onClick={() => {
                        choseTypeReq('Draft')
                        handleClick('Draft')
                    }}>
                    Черновики
                </StyledInput>
                <StyledInput 
                    className={`name ${choseType == 'Fix' ? "selected" : ""}`}
                    onClick={() => { 
                        choseTypeReq('Fix')
                        handleClick('Fix')
                    }}>
                    Исправить
                </StyledInput>
                <StyledInput 
                    className={`name ${choseType == 'Check' ? "selected" : ""}`}
                    onClick={() => {
                        choseTypeReq('Check')
                        handleClick('Check')
                    }}>
                    На проверке
                </StyledInput>
                <StyledInput 
                    className={`name ${choseType == 'Complete' ? "selected" : ""}`}
                    onClick={() => {
                        choseTypeReq('Complete')
                        handleClick('Complete')
                    }}>
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