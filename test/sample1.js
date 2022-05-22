import { expect } from "chai";

describe('unit test1', () => {
    describe('pass tests', () => {
        it('validate 10+10 equals 20', () => {
            expect(10 + 10).equal(20);
        });

        it('validate a+b equals ab', () => {
            expect('a' + 'b').equal('ab');
        });
    })

    describe('fail tests', () => {
        it('validate 20+10 is equal to 30', () => {
            expect(20 + 10).equal(30);
        });
    })
});