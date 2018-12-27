## JS Data Types

- string
- number
 - NaN
- boolean
- object
 - object
 - date
 - array
 - null
- function

> `typeof`으로는 object가 date인지 array인지 판단할 수 없음

### typeof는 항상 문자열을 반환한다.  

### constructor

```javascript
"John".constructor  // Return String()
(3.14).constructor  // Return Number()
false.constructor   // Return Boolean()
{name:'John',age:34}.constructor  // Return Object()
new Date().constructor  // Return Date()
function () {}.constructor  // Return Function()
```
