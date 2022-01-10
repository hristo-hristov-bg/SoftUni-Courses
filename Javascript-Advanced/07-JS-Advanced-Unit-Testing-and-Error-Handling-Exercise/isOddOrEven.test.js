const {expect} = require('chai');
const isOddOrEven = require('./isOddOrEven');


describe('test if number is odd or even', () => {
    it('if input is not a string', ()=>{
        expect(isOddOrEven(1234)).to.be.undefined;
        expect(isOddOrEven(['kjskajk'])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('returns even number', ()=> {
        expect(isOddOrEven('asdf')).to.be.equal('even');
    });

    it('returns odd number', ()=> {
        expect(isOddOrEven('asd')).to.be.equal('odd');
    });
});