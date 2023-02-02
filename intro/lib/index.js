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
// class Queue<T> {
//   data = [];
//   push(item: T) {
//     this.data.push(item);
//   }
//   pop(): T {
//     return this.data.shift();
//   }
// }
// const FIFO = new Queue <number> ();
// FIFO.push(12);
// FIFO.pop();
// class Queue<T> {
//   data = [];
//   push(item: T) {
//     return this.data.push(item);
//   }
//   pop(): T {
//     return this.data.shift();
//   }
// }
// const newQueue = new Queue<number>();
// newQueue.push(20)
// newQueue.push(80)
// newQueue.pop()
//Any and Unknown in typescript
//Both are the superset, can be assigned to any type(like boolean, string)
//Any: Bypasses typechecks features of the typescript. Complete freedom
//Unknown: Some freedom, but loose typechecking is done
//11.
// let exampleAny: any;
// let exampleUnknown: unknown;
// exampleAny = 123;
// exampleAny = "Abx";
// exampleAny = true;
// exampleUnknown = 123;
// exampleUnknown = "Abc";
// exampleUnknown = false;
// exampleAny.push.pop.shift.crush(123); //Anything you can do, no type checking in case of any
// //exampleUnknown.push.pop() //Will give error, first we have check it's type. Unknown is more typesafe version of any
// //Example
// if (typeof exampleUnknown === "string") {
//   exampleUnknown.trim();
// }
// if (typeof exampleUnknown === "boolean") {
//   let exampleSetBoolean: boolean = exampleUnknown;
// }
// //Use of unknown is in (Migration)legacy code, to provide some typechecking, and not break the application & it provide internal type checks, as shown in the below example.
// function log(value: unknown) {
//   console.log(value.toFixed(2)); //Internal Type Error.
// }
// log(2);
// log("Hello World"); //No type error in calling
//Fixed
// function log(value: undefined) {
//   if (typeof value == "number") {
//     console.log(value.toFixed(2));
//   } else {
//     console.log(value);
//   }
// }
// log(2010.1221);
// log("Hello World");
//12. Frontend Frameworks
//13.
// let stringFunction = load();
// const trimmer = (stringFunction as string).trim();
// function load() {
//   throw new Error("Function not implemented.");
// }
//14.
// console.log(process.env.NEW_APP);
