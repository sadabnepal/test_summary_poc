import { expect } from "chai";

describe('unit test', () => {
    describe('pass tests', () => {
        it('validate 10+10 equals 20', () => {
            expect(10 + 10).equal(20);
        });

        it('validate a+b equals ab', () => {
            expect('a' + 'b').equal('ab');
        });
    })

    describe('fail tests', () => {
        it('validate 10+10 is not equal to 30', () => {
            expect(10 + 10).equal(30);
        });
    })
});