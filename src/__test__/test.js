import Team from "../team.js";

describe("Team", () => {
    let team;

    beforeEach(() => {
        team = new Team();
        team.members = ["Игорь", "Вася", "Олег"];
    });

    test("sтестирование всего итератора", () => {
        const members = [];
        for (const member of team) {
            members.push(member);
        }
        expect(members).toEqual(["Игорь", "Вася", "Олег"]);
    });

    test('тестирование одной итерации', () => {
        const iterator = team[Symbol.iterator]();
        const firstMember = iterator.next();
        expect(firstMember.value).toBe("Игорь");
        expect(iterator.next().value).toBe("Вася");
        expect(iterator.next().value).toBe("Олег");
        expect(iterator.next().done).toBe(true);
    });
});
