import digitsFormat from './digitsFormat';
interface NumberListItem {
    regExp: RegExp;
    value: string;
};
export default function dateFormatter(date: any, format = 'yyyy/MM/dd') {
    let targetDateObj: object;
    if (date instanceof Date) {
        targetDateObj = date;
    } else if ((typeof date === 'number') || (typeof date === 'string' && !isNaN(Date.parse(date)))) {
        targetDateObj = new Date(date);
    }
    if (!(targetDateObj instanceof Date) || targetDateObj.toString() === 'Invalid date') return 'Invalid input';
    const numberList: Array<NumberListItem> = [
        {
            regExp: /yyyy/i,
            value: String(targetDateObj.getFullYear())
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
            value: String(targetDateObj.getMonth() + 1)
        },
        {
            regExp: /dd/i,
            value: digitsFormat(targetDateObj.getDate())
        },
        {
            regExp: /d/i,
            value: String(targetDateObj.getDate())
        },
        {
            regExp: /hh/i,
            value: digitsFormat(targetDateObj.getHours())
        },
        {
            regExp: /h/i,
            value: String(targetDateObj.getHours())
        },
        {
            regExp: /mm/,
            value: digitsFormat(targetDateObj.getMinutes())
        },
        {
            regExp: /m/,
            value: String(targetDateObj.getMinutes()),
        },
        {
            regExp: /ss/i,
            value: digitsFormat(targetDateObj.getSeconds())
        },
        {
            regExp: /s/i,
            value: String(targetDateObj.getSeconds())
        }
    ];
    let outPut: string = format;
    numberList.forEach(i => {
        outPut = outPut.replace(i.regExp, i.value);
    })
    return outPut;
}