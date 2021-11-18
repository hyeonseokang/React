const today = new Date();
const getNow = ()=>{
    return today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
};
const getDay = ()=>{
    return today.toLocaleDateString('ko-KR', { weekday: 'long' });
};

export {getNow, getDay};
