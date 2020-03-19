import dateFormatter from '../src/index';

describe('Common time format conversion', () => {
    describe('To yyyy/MM/dd', () => {
        test('yyyy-MM-dd to yyyy/MM/dd', () => {
            expect(dateFormatter('2020-03-01', 'yyyy/MM/dd')).toBe('2020/03/01');
        });
        test('yyyy.MM.dd to yyyy/MM/dd', () => {
            expect(dateFormatter('2020.03.01', 'yyyy/MM/dd')).toBe('2020/03/01');
        });
    })
    describe('To yyyy-MM-dd', () => {
        test('yyyy/MM/dd to yyyy-MM-dd', () => {
            expect(dateFormatter('2020/03/01', 'yyyy-MM-dd')).toBe('2020-03-01');
        });
        test('yyyy.MM.dd to yyyy-MM-dd', () => {
            expect(dateFormatter('2020.03.01', 'yyyy-MM-dd')).toBe('2020-03-01');
        });
    })
    describe('To yyyy.MM.dd', () => {
        test('yyyy/MM/dd to yyyy.MM.dd', () => {
            expect(dateFormatter('2020/03/01', 'yyyy.MM.dd')).toBe('2020.03.01');
        });
        test('yyyy-MM-dd to yyyy.MM.dd', () => {
            expect(dateFormatter('2020-03-01', 'yyyy.MM.dd')).toBe('2020.03.01');
        });
    })
    describe('To MM-yyyy-dd', () => {
        test('yyyy/MM/dd to MM-yyyy-dd', () => {
            expect(dateFormatter('2020/03/01', 'MM-yyyy-dd')).toBe('03-2020-01');
        })
        test('yyyy-MM-dd to MM-yyyy-dd', () => {
            expect(dateFormatter('2020-03-01', 'MM-yyyy-dd')).toBe('03-2020-01');
        })
        test('yyyy.MM.dd to MM-yyyy-dd', () => {
            expect(dateFormatter('2020.03.01', 'MM-yyyy-dd')).toBe('03-2020-01');
        })
    })
    describe('Invalid input', () => {
        test('Input aaa', () => {
            expect(dateFormatter('aaa', 'MM-yyyy-dd')).toBe('Invalid date');
        })
    })
    describe('Use hh、mm、ss', () => {
        test('To MM-DD hh:mm:ss', () => {
            expect(dateFormatter(1584596625304, 'MM-DD hh:mm:ss')).toBe('03-19 13:43:45');
        })
    })
})