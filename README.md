# date-format-conversion
Converter for date format conversion

## Basic usage
```bash
$ npm i date-format-conversion --save-dev
```
To do:    
```js
import dateFormatter from 'date-format-conversion';
// the module would export a function, you can also rename it

// Input a string
dateFormatter('2020-03-01', 'yyyy/MM/dd');// return '2020/03/01'
dateFormatter('2020/03/01', 'yyyy-MM-dd');// return '2020-03-01'
dateFormatter('2020-03-01', 'yyyy.MM.dd');// return '2020.03.01'

// Input a timestamp
dateFormatter(1584596625304, 'MM-DD hh:mm:ss');// return '03-19 13:43:45'
dateFormatter(1584596625304, 'MM-yyyy-dd');// return '03-2020-19'
dateFormatter(1584596625304, 'yyyy-MM-dd');// return '2020-03-19'
dateFormatter(1584596625304, 'yyyy/MM/dd');// return '2020/03/19'
dateFormatter(1584596625304, 'yyyy:MM:dd');// return '2020:03:19'
```
