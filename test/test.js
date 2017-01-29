const expect = require('expect.js')
const MayBe = require('../src/MayBe.js')
const Identity = require('../src/Identity.js')

// Maybe
expect(MayBe.just(1).chain((val) => val*3)).to.eql(3)
expect(MayBe.nothing().chain((val) => val*3)).to.eql(MayBe.nothing())

// identity
expect(Identity.value(1).chain((val) => val*3)).to.eql(3)
