// 词法作用域是在写代码或者说定义时确定的而动态作用域是在运行时确定的。 （this也是！）词法作用域关注函数在何处声明，而动态作用域关注函数从何处调用

function bar(age = 0) {
  console.log('my name is ' + this.name + ';age ' + age)
}

var name = '力宏'

const obj = {
  name: '杰伦'
}

//---
bar() // my name is 力宏;age 0

//---bind
const bindBar = bar.bind(obj) //返回一个新的函数
bindBar() //my name is 杰伦;age 0

//---apply
bar.apply(obj, [18]) // my name is 杰伦;age 18

//---call
bar.call(obj, 19) //my name is 杰伦;age 19

//JavaScript语言和宿主环境中许多新的内置函数， 都提供了一个可选的参数， 通常被称为“ 上下文”（context），其作用和bind(..)一样， 确保你的回调函数使用指定的this
//---forEach
//这些函数实际上就是通过call(..)或者apply(..)实现了显式绑定， 这样你可以少些一些代码
[1,2,3].forEach(bar, obj);
//my name is 杰伦;age 1
//my name is 杰伦;age 2
//my name is 杰伦;age 3