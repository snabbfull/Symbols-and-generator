export default class Team {
    *[Symbol.iterator]() {
        let index = 0;
        while (index < this.members.length) {
            yield this.members[index++];
        }
    }
}