// 作用域和闭包
// 现代的模块机制 requirejs

const MyModules = (function() {
    const modules = {}
    //name包名、deps依赖
    function define(name, deps, impl) {
        let moduleDeps = []
        for (let i = 0; i < deps.length; i++) {
           moduleDeps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl, moduleDeps)
    }

    function get(name) {
        return modules[name]
    }

    return {
        define: define,
        get: get
    }
})()

MyModules.define('bar', [], function() {
    function hello (name) {
        return 'my module name is bar, say' + (name || '')
    }

    return {
        hello: hello
    }
}) 


MyModules.define('foo', ['bar'], function(bar) {
    function awesome (hungry) {
        console.log( bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    }
}) 

const foo = MyModules.get('foo')
console.log('MyModules', fff.awesome('测试')) //MY MODULE NAME IS BAR, SAY测试