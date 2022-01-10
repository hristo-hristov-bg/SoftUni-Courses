const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry');


describe('Symetry chek', () => {
    it('returns true for symetric array', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    });

    it('returns false for non-symetric array', () => {
        expect(isSymmetric([1,2,3])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('returns false for different type of symetric array', () => {
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });

    it('returns true for symetric arr with odd nums of elements', () => {
        expect(isSymmetric([1,2,1])).to.be.true;
    })
});