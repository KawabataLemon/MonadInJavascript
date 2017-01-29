// IOモナド
class IO {

  constructor(fn) {
    this.fn = fn
  }

  chain(f) {
    return f(this.fn())
  }

  static pure(value) {
    return new IO(()=>value)
  }

  static log(message) {
    return new IO(() => console.log(message))
  }
}

module.exports = IO;
