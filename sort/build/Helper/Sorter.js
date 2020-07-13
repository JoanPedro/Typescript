"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorted = void 0;
class Sorted {
    sort() {
        const { length } = this; // .length intríseco devido declaração number.
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorted = Sorted;
