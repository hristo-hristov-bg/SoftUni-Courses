const {expect} = require('chai');
const lookupChar = require('./charLookUp');


describe('tetsing charLookUp function', () => {
    describe('check if the right input type is entered', () => {
        it('returns undefined if first parameter is not a string', () => {
            expect(lookupChar(['sasasa'],3)).to.be.undefined;
            expect(lookupChar({},3)).to.be.undefined;
            expect(lookupChar(4,3)).to.be.undefined;
        });

        it('returns undefined if second parameter is not a integer', () => {
            expect(lookupChar('sasasa','3')).to.be.undefined;
            expect(lookupChar('sasasa',['sasa'])).to.be.undefined;
            expect(lookupChar('sasasa',{})).to.be.undefined;
        });
    });

    describe('check if it returns "Incorrect Index"', () => {
        it('checks the value of Index', () => {
            expect(lookupChar('sas',3)).to.be.equal('Incorrect index');
            expect(lookupChar('abc',-1)).to.be.equal('Incorrect index');
            expect(lookupChar('abc',1.1)).to.be.undefined;
        });
    });

    describe('check if function returns correct output', () => {
        it('returns the correct result', () => {
            expect(lookupChar('sas',1)).to.be.equal('a');
            expect(lookupChar('abc',0)).to.be.equal('a');
        });
    });
});