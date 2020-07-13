"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const Sorter_1 = require("./Sorter");
const numbersCollection = new NumberCollection_1.NumbersCollections([-1, 7, 3, -15, 10, 9]);
const array = new Sorter_1.Sorted(numbersCollection);
array.sort();
console.log(numbersCollection.data);
