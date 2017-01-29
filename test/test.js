const expect = require('expect.js')
const MayBe = require('../src/MayBe.js')
const Identity = require('../src/Identity.js')
const IO = require('../src/IO.js')

// Maybe
expect(MayBe.just(1).chain((val) => val*3)).to.eql(3)
expect(MayBe.nothing().chain((val) => val*3)).to.eql(MayBe.nothing())

// identity
expect(Identity.value(1).chain((val) => val*3)).to.eql(3)

// IO
expect(IO.pure(3).chain(val => val*3)).to.eql(9)
expect(IO.readFile('resource/test.txt').run()).to.eql('testtext\n')
