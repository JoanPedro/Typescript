"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./Collections/LinkedList");
const CharacteresCollections_1 = require("./Collections/CharacteresCollections");
const NumberCollection_1 = require("./Collections/NumberCollection");
const numbersCollection = new NumberCollection_1.NumbersCollections([-1, 7, 3, -15, 10, 9]);
const charactersCollection = new CharacteresCollections_1.CharactersColletion('Xaayb');
const linkedList = new LinkedList_1.LinkedList();
// const sortedNumberArray = new Sorted(numbersCollection)
// const sortedCharacterString = new Sorted(charactersCollection)
// const sortedLinkedList = new Sorted(linkedList)
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
