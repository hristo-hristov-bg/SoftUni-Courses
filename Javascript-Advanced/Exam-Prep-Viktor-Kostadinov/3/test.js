const testNumbers = require('./testNumbers');
const {expect} = require('chai');

describe('Test Numbers', () => {
    describe('test sumNumbers', () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(3,5)).to.equal('8.00');
        });

        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(-1,2)).to.equal('1.00');
        });

        it('works with strings', () => {
            expect(testNumbers.sumNumbers('a',2)).to.equal(undefined);
            expect(testNumbers.sumNumbers('1',2)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1,'2')).to.equal(undefined);
        })
    });

    describe('test numberChecker', () => {
        it('check if works with odd value as string', () => {
            expect(testNumbers.numberChecker('5')).to.equal('The number is odd!');
        });

        it('check if works with even value as string', () => {
            expect(testNumbers.numberChecker('6')).to.equal('The number is even!');
        });

        it('check if the number is even', () => {
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
        });

        it('check if the number is odd', () => {
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!');
        });

        it('check if throw if input is not a number', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });

    describe('test averageSumArray', () => {
        it('check if returns average number from arr', () => {
            expect(testNumbers.averageSumArray([1,2,3])).to.equal(2);
        });
    });
});