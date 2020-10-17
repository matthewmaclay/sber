import React, { useEffect } from "react";
import style from 'styled-components';
import { Button } from 'bumbag';

const StyledLessonHeader = style.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-bottom: 1px solid #E0E0E0;
`

const StyledInput = style.div`
    margin: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`

const StyledBlockStatus  = style.div`
    display: flex;
`

const StyledButtonCreate = style.div`

`

const LessonHeader = () => {
    return(
        <StyledLessonHeader>
            <StyledBlockStatus> 
                <StyledInput>
                    Черновики
                </StyledInput>
                <StyledInput>
                    Исправить
                </StyledInput>
                <StyledInput>
                    На проверке
                </StyledInput>
                <StyledInput>
                    Завершено
                </StyledInput>
            </StyledBlockStatus>
            <StyledButtonCreate>
                <Button palette="primary">
                    + Создать
                </Button>
            </StyledButtonCreate>
        </StyledLessonHeader>
    )
}

export default LessonHeader;