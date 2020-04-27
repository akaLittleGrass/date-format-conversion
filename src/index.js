import digitsFormat from './digitsFormat';
export default function dateFormatter(date, format = 'yyyy/MM/dd') {
    let targetDateObj;
    if (date instanceof Date) {
        targetDateObj = date;
    } else if ((typeof date === 'number') || (typeof date === 'string' && !isNaN(Date.parse(date)))) {
        targetDateObj = new Date(date);
    }
    if (!(targetDateObj instanceof Date) || targetDateObj.toString() === 'Invalid date') return 'Invalid input';
    const numberList = [
        {
            regExp: /yyyy/i,
            value: targetDateObj.getFullYear()
        },
        {
            regExp: /yy/i,
            value: targetDateObj.getFullYear().toString().slice(-2)
        },
        {
            regExp: /MM/,
            value: digitsFormat(targetDateObj.getMonth() + 1)
        },
        {
            regExp: /M/,
            value: targetDateObj.getMonth() + 1
        },
        {
            regExp: /dd/i,
            value: digitsFormat(targetDateObj.getDate())
        },
        {
            regExp: /d/i,
            value: targetDateObj.getDate()
        },
        {
            regExp: /hh/i,
            value: digitsFormat(targetDateObj.getHours())
        },
        {
            regExp: /h/i,
            value: targetDateObj.getHours()
        },
        {
            regExp: /mm/,
            value: digitsFormat(targetDateObj.getMinutes())
        },
        {
            regExp: /m/,
            value: targetDateObj.getMinutes(),
        },
        {
            regExp: /ss/i,
            value: digitsFormat(targetDateObj.getSeconds())
        },
        {
            regExp: /s/i,
            value: targetDateObj.getSeconds()
        }
    ];
    /* for-of loops here would trigger a babel's bug */
    // for (const item of numberList) {
    //     outPut = outPut.replace(item.regExp, item.value);
    // }
    let outPut = format;
    numberList.forEach(i => {
        outPut = outPut.replace(i.regExp, i.value);
    })
    return outPut;
}