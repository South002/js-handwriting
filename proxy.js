const target = {
  foo: 'baz'
}
const handler={
  get() {
    return 'handler'
  }
}

const proxy=new Proxy(target,handler)
console.log(target.foo)
console.log(proxy.foo)