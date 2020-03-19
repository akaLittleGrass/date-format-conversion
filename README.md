# date-format-conversion
Just a javascript function you can use to do some date format conversion

## Basic usage
```bash
$ npm i date-format-conversion --save-dev
```
Register the component:    
```js
import dateFormatter from 'date-format-conversion';//the module would export a function, you can rename it

dateFormatter('2020-03-01', 'yyyy/MM/dd');//'2020/03/01'
dateFormatter('2020/03/01', 'yyyy-MM-dd');//'2020-03-01'
dateFormatter('2020-03-01', 'yyyy.MM.dd');//'2020.03.01'
dateFormatter(1584596625304, 'MM-DD hh:mm:ss');//'03-19 13:43:45'
dateFormatter(1584596625304, 'MM-yyyy-dd');//'03-2020-19'
dateFormatter(1584596625304, 'yyyy-MM-dd');//'2020-03-19'
dateFormatter(1584596625304, 'yyyy/MM/dd');//'2020/03/19'
dateFormatter(1584596625304, 'yyyy:MM:dd');//'2020:03:19'
```
