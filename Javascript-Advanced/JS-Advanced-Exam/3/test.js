const companyAdministration = require('./companyAdministration');
const {expect} = require('chai');

describe('test companyAdministration', () => {
    describe('test hiringEmployee', () => {
        it('test if position is different from Programmer', () => {
            expect(() => companyAdministration.hiringEmployee('Peter', 'Developer', 5)).throw();
        });

        it('test if hired with more than 3 years experience', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 5)).to.contain('was successfully hired');
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 3)).to.contain('was successfully hired');
        });

        it('test if not hired if conditions are not met', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 1)).to.contain('is not approved for this position');
        });
        
    });

    describe('test calculateSalary', () => {
        it('test if calculates salary correct', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });

        it('test if add bonus correct', () => {
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        });

        it('test if validating works correctly', () => {
            expect(() => companyAdministration.calculateSalary('abc')).throw();
            expect(() => companyAdministration.calculateSalary(-46)).throw();
            expect(() => companyAdministration.calculateSalary('10')).throw();
            expect(() => companyAdministration.calculateSalary([12])).throw();
            expect(() => companyAdministration.calculateSalary({peter: 12})).throw();
        });
    });

    describe('test firedEmployee', () => {
        it('test if validating works correctly', () => {
            expect(() => companyAdministration.firedEmployee(23, 26)).throw();
            expect(() => companyAdministration.firedEmployee('23', 26)).throw();
            expect(() => companyAdministration.firedEmployee(['peter', 'George', 'Ivan'], '1')).throw();
            expect(() => companyAdministration.firedEmployee(['peter', 'George', 'Ivan'], 3)).throw();
            expect(() => companyAdministration.firedEmployee(['peter', 'George', 'Ivan'], -2)).throw();
            expect(() => companyAdministration.firedEmployee({'peter': 'George',}, 2)).throw();
        });

        it('test if works correctly', () => {
            expect(companyAdministration.firedEmployee(['Peter', 'George', 'Ivan'],1)).to.equal('Peter, Ivan');
            expect(companyAdministration.firedEmployee(['Peter', 'George', 'Ivan'],0)).to.equal('George, Ivan');
        });
    });
});