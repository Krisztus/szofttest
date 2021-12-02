import { TestWatcher } from "@jest/core";
import { AttendanceList } from "./AttendanceList";
import { Genderguesser } from "./GenderGuesser";

describe("Test GenderGue API", () => {
    let name;
    beforeAll(() => {
        name = new Genderguesser();
    });
    test('tim call', () => {
        name.getGuess('tim').then((result) =>{
            expect(result).resolves;
        });
    });
    test('ertek visszaadas',() => {
        name.getGuess('ben').then(result => {
            expect(result).not.toBenull;
        });
    });
    test('mate male', () => {
        name.getGuess('mate').then(result => {
            expect(result).arrayContaining('male');
        });
    });

});

describe('Test AttandanceList',() => {
    let list;
    beforeAll(() => {
        list = new AttendanceList();
    });
    test('attandancelist visszaad') () => {
        expect(list.add('mate'))
    }
});