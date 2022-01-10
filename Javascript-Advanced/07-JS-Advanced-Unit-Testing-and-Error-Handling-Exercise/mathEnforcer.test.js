const { expect } = require('chai');
const {mathEnforcer }= require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive(0.5)).to.be.closeTo(5.5,0.01);
        });

        it('should return undefined with a non - number parameter', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
    });

    describe('subtractTen', () => {
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(0.5)).to.be.closeTo(-9.5,0.01);
        });

        it('should return undefined with a non - number parameter', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
    });

    describe('sum', () => {
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.sum(0, 1)).to.equal(1);
            expect(mathEnforcer.sum(-1,0)).to.equal(-1);
            expect(mathEnforcer.sum(0, -1)).to.equal(-1);
            expect(mathEnforcer.sum(0.5, 0.4)).to.be.closeTo(0.9, 0.01);
        });

        it('should return undefined with a non - number parameter', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
            expect(mathEnforcer.sum([1], 1)).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
            expect(mathEnforcer.sum(1, [1])).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
        });
    });
});