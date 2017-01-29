// IOモナド
class IO {

  constructor(fn, world = null) {
    this.fn = fn
    this.world = null
  }

  run() {
    return this.fn()
  }

  chain(f) {
    return f(this.run())
  }

  static readFile(path) {
    const fs = require('fs')
    return new IO(()=>fs.readFileSync(path, 'utf8'))
  }

  static pure(value) {
    return new IO(()=>value)
  }

  static log(message) {
    return new IO(() => console.log(message))
  }
}

module.exports = IO;
