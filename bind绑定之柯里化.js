// bind(..)的功能之一就是可以把除了第一个参数（第一个参数用于绑定this）之外的其他参数都传给下层的函数
// 这种技术称为“部分应用”，是“柯里化”的一种
function foo(p1, p2) {
  this.val = p1 + p2;
}

// 之所以使用null是因为在本例中我们并不关心硬绑定的this是什么
// 反正使用new时this会被修改
var bar = foo.bind(null, "p1"); //p1作为了参数传给下层的函数

var baz = new bar("p2");
baz.val; // p1p2

var bar2 = foo.bind(null, "p1", "v1");
var baz2 = new bar("p2");
baz.val; // p1v1

function foo2(a, b) {
  console.log("a:" + a + ", b:" + b);
}

//如果你把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认绑定规则
//一种非常常见的做法是使用apply(..)来“ 展开”一个数组， 并当作参数传入一个函数。类似地，bind(..)可以对参数进行柯里化（预先设置一些参数），这种方法有时非常有用
// 把数组“展开”成参数
foo2.apply(null, [2, 3]); // a:2, b:3
// 使用 bind(..)进行柯里化
var bar3 = foo.bind(null, 2);
bar3(3); // a:2, b:3
