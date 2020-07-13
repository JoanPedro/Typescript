"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersColletion = void 0;
const Sorter_1 = require("../Helper/Sorter");
class CharactersColletion extends Sorter_1.Sorted {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
}
exports.CharactersColletion = CharactersColletion;
