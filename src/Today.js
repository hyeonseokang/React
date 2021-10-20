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

export {getNow, getDay};
