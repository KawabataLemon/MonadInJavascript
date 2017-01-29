class Identity {
  constructor(val) {
    this.val = val
  }

  chain(f) {
    return f(this.val)
  }
  static value(val) {
    return new Identity(val)
  }
}

module.exports = Identity;
