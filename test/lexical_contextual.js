// 副作用: コンテキストについて
// thisがコンテキストによって変わるのを避けるため構文のスコープ(lexical scope)を優先する
class FuncTest {
  constructor() {
    this.lexicalFunction = ()=>{
      console.log(this);
    }
    this.contextualFunction = function() {
      console.log(this);
    }
  }
  getLexicalFunction() {
    return this.lexicalFunction
  }
  getContextualFunction() {
    return this.contextualFunction
  }
}

var caller = {
  callback: null,
  call: function() {
    this.callback()
  }
}
const test = new FuncTest()
caller.callback = test.getLexicalFunction()
caller.call() // 確かに定義時のthisのまま
caller.callback = test.getContextualFunction()
caller.call() // 定義の仕方で中身が違う
