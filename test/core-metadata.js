const assert = require('chai').assert

describe('Object', function () {
  it('should merge two objects resulting in { foo: "Bar", foobar: "Foo" }.', function () {
    const expectedResult = {
      foo: 'Bar',
      foobar: 'Foo'
    }

    const target = {
      foo: 'Bar'
    }

    const toMerge = {
      foobar: "Foo"
    }

    const result = Object.assign(target, toMerge)

    assert.deepEqual(result, expectedResult)
  })
})

describe('Module importer', function () {
  it('should import module as expected (in this case, an object: { foo: "Bar" }).', function () {
    const expectedResult = {
      foo: 'Bar'
    }

    const result = require('./core-metadata-lib')

    assert.deepEqual(result, expectedResult)
  })
})
