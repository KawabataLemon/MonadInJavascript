// Maybeモナド
class MayBe {
  constructor(type, value) {
    this.type = type
    this.value = value
  }

  chain(f) {

    if (this.type == 'nothing') {
      return MayBe.nothing()
    }

    if (this.value == null) {
      return MayBe.nothing()
    }
    return f(this.value)
  }

  static just(value) {
    return new MayBe('just', value)
  }

  static nothing() {
    return new MayBe('nothing', null)
  }
}

module.exports = MayBe;
