# typeasy
用于判断数据类型的简易工具库


## 安装
```javascript
npm i typeasy
```


## 使用
```javascript
const typeasy = require('typeasy')    // 引用
console.log(typeasy('hello'))    // string
console.log(typeasy([1,2]))    // array
...
```


## 与 typeof 对比
以下是各数据类型，使用 typeasy 的值和使用 typeof 的值对比，可以看出使用 typeasy 可以更准确地获取数据类型。

| 数据类型 | 示例 | typeasy | typeof |
| :---: | :---: | :---: | :---: |
| 数值 | 123 | number | number |
| 字符串 | 'hello' | string | string |
| 布尔 | true | boolean | boolean |
| 列表 | [1,2] | array | object |
| 函数 | function ( ){ } | function | function |
| null | null | null | object |
| undefined | undefined | undefined | undefined |
| 普通对象 | { name:'mark' } | object | object |
| 时间对象 | new Date( ) | date | object |
| 正则对象 | /^1[3&#124;4&#124;5&#124;6&#124;7&#124;8&#124;9][0-9]{9}$/ | regexp | object |
| 错误对象 | new Error('errMsg') | error | object |
| Symbol对象 | Symbol('dec') | symbol | symbol |
| Promise对象 | new Promise(function (resovle, reject) {}) | promise | object |
| Set对象 | new Set( ) | set | object |
