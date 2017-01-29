const expect = require('expect.js')
const MayBe = require('../src/MayBe.js')

expect(MayBe.just(1).chain((val) => val*3)).to.eql(3)
expect(MayBe.nothing().chain((val) => val*3)).to.eql(MayBe.nothing())
