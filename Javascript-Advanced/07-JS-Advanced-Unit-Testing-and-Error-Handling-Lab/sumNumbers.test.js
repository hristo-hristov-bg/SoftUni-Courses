const { expect } = require('chai');
const sum = require('./sumNumbers');

describe('sum of numbers', () => {
    it('take arr of nums', () => {
        expect(sum('1','2','3')).to.equal('false');
    })
})