import 'jest-extended';
import {ValidateLaunch} from "./ValidateLaunch";

interface SutTypes {
    sut: ValidateLaunch,
}

const makeSut = (): SutTypes => {
    const sut = new ValidateLaunch();
    return {
        sut,
    };
};

describe('Validate Launch',()=>{
    test('should return empty array if evt is empty', async() =>{
        const { sut } = makeSut();
        const evt = {results:[]}
        const result = await sut.process(evt)
        if (result.length > 0) {
            expect(result).toBe(expect.arrayContaining([]))
        }
    })
})