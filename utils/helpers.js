export const getPercentage = (part,total) => {
    if(part===0) return 0;
    else return (part*100)/total;
}