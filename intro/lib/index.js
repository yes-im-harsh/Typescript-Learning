"use strict";
// 1.
// let message: string = "Hello";
// message += " world";
// console.log(message);
//2.
// let isTrue: boolean = true;
// let myNumber: number = 99999999;
// let myName: string = "Harsh";
// let notDefined: undefined = undefined;
// let notPresent: null = null;
// let kappaVelorum: symbol = Symbol("star");
// console.log(kappaVelorum);
//3.
// let regularExpression: RegExp = new RegExp("a+2b");
// let array: Array<number> = [1, 2, 3];
// let charArray: Array<string> = ["a", "b", "c"];
// //Sets not have duplicate Values.
// let set: Set<number> = new Set([1, 2, 3]);
// //FIFO Collection using Typescript
// class FIFO<T> {
//   private array: Array<T> = [];
//   push(item: T) {
//     this.array.push(item);
//   }
//   pop(): T | undefined {
//     return this.array.shift();
//   }
// }
// let newFIFO: FIFO<number> = new FIFO();
//4.
// let array: number[] = [1, 2, 3];
// array = [1];
// array = [1, 2, 3]
// // array=["Hello World"] //Error
// //Tuples
// let tuples : [number, number] = [0,0]
// tuples = [1, 2]
// tuples = [2, 6]
// //Throws error
// tuples = [3, 4, 5]
//5.
// type Point = { x: number; y: number };
// let point: Point = {
//   x: 0,
//   y: 0,
// };
// let unit: Point = {
//   x: 5,
//   y: 10,
// };
//6.
// function add(a: number, b: number): number {
//   return a + b;
// }
// function newAdd(a: number, b: number): void {
//   console.log(a + b);
// }
// //Rest parameters
// function sum(...values: number[]) {
//   return values.reduce((previous, current) => {
//     return previous + current;
//   });
// }
// console.log(sum(1, 2, 3));
//Using Type alis
// type AddTWO = (givenNumber: number) => number;
// let addTwo: AddTWO;
// addTwo = function (givenNumber: number): number {
//   return givenNumber + 2;
// };
//7. Structure
// type Point2D = { x: number; y: number };
// type Point3D = { x: number; y: number; z: number };
// let point2D: Point2D = { x: 22.2, y: -85.2 };
// let point3D: Point3D = { x: 66.2, y: 55.2, z: 98.2 };
// //Extra information is "ok"
// point2D = point3D;
// //Missing Information will give Compile Time Error
// point3D = point2D;
//8. Class
// class Animal {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   public move(distanceInMeters: number) {
//     console.log(`${this.name} move ${distanceInMeters}m`);
//   }
// }
// const cat = new Animal("cat");
// cat.move(10);
// // cat.name;
// class Bird extends Animal {
//   fly(distanceInMeters: number) {
//     console.log(`${this.name} fly's ${distanceInMeters}`);
//   }
// }
// const falcon = new Bird("falcon");
// falcon.fly(10);
//Public functions: are assessable from anywhere
//Private functions: are assessable only inside the class
//Protected function: are assessable only inside the class and It's instance(object/subclasses)
//9. Theory about versions of typescript
//10.
//FIFO in typescript
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const FIFO = new Queue();
FIFO.push(12);
FIFO.pop();
