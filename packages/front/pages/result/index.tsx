import React from 'react';
import style from 'styled-components';
import { Button } from 'bumbag';

const StyledResultPage = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledHeaders = style.div`
    display: flex;
    justify-content: start;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    color: #000000;
    margin-top: 68px;
    width: 40%;
`

const StyledPercent = style.div`
    display: flex;
    justify-content: space-between;
    margin-top: 71px;
    height: 27px;
    width: 40%;

    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        color: #000000;
    }

    .persent {
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 36px;
        color: #E19F41;
    }
`

const StyledStopWords = style.div`
    margin-top: 52px;
    width: 40%;

    .numberStopWords {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #000000;

        margin-bottom: 16px;
    }

    .arrayStopWords {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        background: rgba(146, 79, 209, 0.1);
        border-radius: 4px;
        padding: 23px 21px 32px 20px
    }
`

const StyledReplace = style.div`
    height: 1px;
    width: 40%;
    background: #E0E0E0;
    margin-top: 40px;
`

const StyledReplaceToo = style.div`
    height: 1px;
    width: 40%;
    background: #E0E0E0;
    margin-top: 58px;
`

const StyledReadability = style.div`
    display: flex;
    justify-content: space-between;
    margin-top: 59px;
    height: 27px;
    width: 40%;

    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        color: #000000;
    }

    .status {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        color: #27AE60;
    }
`
const StyledTasks = style.div`
    margin-top: 73px;   
    width: 40%;

    .body {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 27px;
        color: #000000;
    }

    .status {
        border-radius: 50%;
        width: 48px;
        height: 49px;
        background: #27AE60;
        opacity: 0.16;
    }

    .moreInfo {
        margin-top: 64px;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #000000;
    }
`

const StyledButtonSend = style.div`
    margin-top: 48px;
    background: #5454E2;
    border-radius: 4px;
`

const Percent = ({ persent }) => {
    return(
        <StyledPercent>
            <div className="text">Корректность текста</div>
            <div className="persent">{`${persent}%`}</div>
        </StyledPercent>
    )
}

const FieldStopWords = ({ stopWords }) => {
    const arrayWords = stopWords.words.join(', ');
    return (
        <StyledStopWords>
            <div className="numberStopWords">{`${stopWords.number} стоп-слов`}</div>
            <div className="arrayStopWords">{arrayWords}</div>
        </StyledStopWords>
    )
}

const Readability = ({ status }) => {
    return(
        <StyledReadability>
            <div className='text'>Читабельность</div>
            <div className='status'>{status}</div>
        </StyledReadability>
    )
}

const Tasks = ({ status }) => {
    return(
        <StyledTasks>
            <div className="body">
                <div className='text'>{status.head}</div>
                <div className='status'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.16" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#27AE60"/>
                <path d="M20.9782 27.1864L32.5361 17.7914C32.8575 17.5301 33.3298 17.5788 33.5911 17.9003C33.8305 18.1947 33.8122 18.6216 33.5485 18.8945L21.376 31.4932C21.0882 31.7911 20.6134 31.7993 20.3155 31.5115C20.298 31.4946 20.2814 31.4769 20.2656 31.4584L18.4073 29.2762L18.4126 29.2719L15.1933 25.4773C14.9253 25.1614 14.9641 24.6881 15.28 24.4202C15.5213 24.2154 15.8651 24.1842 16.1394 24.3421L20.8016 27.0262L20.9782 27.1864Z" fill="#27AE60" stroke="#27AE60" stroke-width="1.5"/>
                </svg>
                </div>
            </div>
            {status.text !== null && <div className="moreInfo">{status.text}</div>}
        </StyledTasks>
    )
}

const ButtonSend = () => {
    return(
        <StyledButtonSend>
            <Button palette="primary">Отправить редактору</Button>
        </StyledButtonSend>
    )
}

const mock = {
    persent: {
        number: 73
    },
    stopWords: {
        number: 11,
        words: [
            "неопределенность",
            "необъективная", 
            "оценка",
            "личное",
            "местоимение",
            "канцеляризм", 
            "обобщение"
        ]
    },
    readability: {
        status: 'Высокая читабельность'
    },
    purposes: {
        status: true,
        head: 'Опросы и задания',
        text: null
    },
    questionnaire: {
        status: true,
        head: 'Автоматические теги',
        text: 'Кулинария, рецепт, приготовление, обучение'
    },
    tags: {
        status: true,
        head: 'Ссылки проверены',
        text: null
    }
}

const ResultPage = () => {
    return (
            <StyledResultPage>
                <StyledHeaders>Общая проверка материала</StyledHeaders>
                <Percent persent={mock.persent.number} />
                <FieldStopWords stopWords={mock.stopWords} />
                <StyledReplace />
                <Readability status={mock.readability.status}/>
                <StyledReplaceToo />
                <Tasks status={mock.purposes} />
                <StyledReplaceToo />
                <Tasks status={mock.questionnaire} />
                <StyledReplaceToo />
                <Tasks status={mock.tags} />
                <StyledReplaceToo />
                <ButtonSend />
            </StyledResultPage>
        );
  }
  
  export default ResultPage;