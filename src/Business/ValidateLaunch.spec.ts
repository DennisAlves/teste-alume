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
        const evt = {}
        const result = await sut.process(evt)
        expect(result).toBeArray()
        expect(result).toBeArrayOfSize(0)
    })
})