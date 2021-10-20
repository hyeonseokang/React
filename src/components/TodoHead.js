import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1{
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

const TodoHead = ()=>{
    const today = new Date();
    const getNow = ()=>{
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        return `${year}년 ${month}월 ${date}일`;
    };
    const getDay = ()=>{
        const day = today.getDay();
        let str_day = '';
        
        if(day === 1)
            str_day = "월요일";
        else if(day === 2)
            str_day = "화요일";
        else if(day === 3)
            str_day = "수요일";
        else if(day === 4)
            str_day = "목요일";
        else if(day === 5)
            str_day = "금요일";
        else if(day === 6)
            str_day = "토요일";
        else if(day === 7)
            str_day = "일요일";
        
        return str_day;
    };
    return (
        <TodoHeadBlock>
            <h1>{getNow()}</h1>
            <div className="day">{getDay()}</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;