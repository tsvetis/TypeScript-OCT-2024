// Class vs Object
// class Mammal {
//   numberOfLeg: number;
//   furColor: string;
//   suhozemenLiE: boolean;
//   constructor(numberOfLeg: number, furColor: string, suhozemenLiE: boolean) {
//     this.numberOfLeg = numberOfLeg;
//     this.furColor = furColor;
//     this.suhozemenLiE = suhozemenLiE;
//   }
//   getDetails(): void {
//     console.log(
//       `This mammal is living on the ground: ${this.suhozemenLiE}, it has fur color: ${this.furColor}, it has ${this.numberOfLeg} number of legs.`
//     );
//   }
// }
// const dog = new Mammal(4, "brown", true);
// dog.getDetails();
// const cat = new Mammal(4, "black", true);
// cat.getDetails();
// const dolphin = new Mammal(0, "none", false);
// dolphin.getDetails();
// Procedural Programming
// let salary = 30000;
// let overtime = 10;
// let rate = 20;
// function getWage(baseSalary, overtime, rate) {
//   return baseSalary + overtime * rate;
// }
// console.log(getWage(salary, overtime, rate));
// OOP - Encapsulation
// const employee = {
//   salary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage: function () {
//     return this.salary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());
// class Person {
//   firstName: string;
//   lastName: string;
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullNameInUpperCase() {
//     return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
//   }
// }
// const ivanPerson = new Person("Ivan", "Petrov");
// console.log(ivanPerson.getFullNameInUpperCase());
// const martinPerson = new Person("Martin", "Ivanov");
// console.log(martinPerson.getFullNameInUpperCase());
// Abstraction
// interface MyRemote {
//   switchChannelDown: () => void;
//   switchChannelUp: () => void;
//   toggleTurnOnTv: () => void;
// }
// class Remote implements MyRemote {
//   private channelNumber: number = 1;
//   private tvIsOff = true;
//   private provideSignalToA() {
//     return "A";
//   }
//   private provideSignalToB() {
//     return "B";
//   }
//   private provideSignalToC() {
//     return "C";
//   }
//   private provideSignalToD() {
//     return "D";
//   }
//   private turnOnTV() {
//     console.log("TV is turned ON");
//     this.tvIsOff = !this.tvIsOff;
//   }
//   private turnOffTV() {
//     console.log("TV is turned OFF");
//     this.tvIsOff = !this.tvIsOff;
//   }
//   public toggleTurnOnTv() {
//     if (this.tvIsOff) {
//       this.turnOnTV();
//     } else {
//       this.turnOffTV();
//     }
//   }
//   public switchChannelUp() {
//     const a = this.provideSignalToA();
//     const b = this.provideSignalToB();
//     const d = this.provideSignalToD();
//     const signal = a + b + d;
//     if (signal === "ABD") {
//       this.channelNumber += 1;
//       console.log("Channel switched to " + this.channelNumber);
//     }
//   }
//   public switchChannelDown() {
//     const d = this.provideSignalToD();
//     const b = this.provideSignalToB();
//     const c = this.provideSignalToC();
//     const signal = d + b + c;
//     if (signal === "DBC") {
//       this.channelNumber -= 1;
//       console.log("Channel switched to " + this.channelNumber);
//     }
//   }
// }
// const myRemote = new Remote();
// myRemote.toggleTurnOnTv();
// myRemote.switchChannelUp();
// myRemote.switchChannelUp();
// myRemote.switchChannelUp();
// myRemote.switchChannelDown();
// myRemote.toggleTurnOnTv();
// Inheritance
// class HtmlElement {
//   innerHtml = "";
//   constructor(innerHtml: string) {
//     this.innerHtml = innerHtml;
//   }
//   click() {
//     console.log("Element was clicked!");
//   }
//   focus() {
//     console.log("This element is on focus!");
//   }
// }
// class TextBox extends HtmlElement {
//   name = "TextBox";
//   constructor() {
//     super("This is the innerHtml for TextBox");
//   }
// }
// class Select extends HtmlElement {
//   name = "Select";
//   constructor() {
//     super("This is the innerHtml for Select");
//   }
// }
// class CheckBox extends HtmlElement {
//   name = "Checkbox";
//   constructor() {
//     super("This is the innerHtml for Checkbox");
//   }
// }
// const myTextBox = new TextBox();
// console.log(myTextBox.innerHtml);
// myTextBox.click();
// const mySelect = new Select();
// console.log(mySelect.innerHtml);
// mySelect.focus();
// const myCheckbox = new CheckBox();
// console.log(myCheckbox.innerHtml);
// myCheckbox.click();
// Polymorphism
// interface Shape {
//   draw: () => void;
// }
// class Triangle implements Shape {
//   draw() {
//     console.log("Draw a triangle");
//   }
// }
// class Square implements Shape {
//   draw() {
//     console.log("Draw a square");
//   }
// }
// class Circle implements Shape {
//   draw() {
//     console.log("Draw a circle");
//   }
// }
// const circle = new Circle();
// circle.draw();
// const triangle = new Triangle();
// triangle.draw();
// function renderSelect() {
//   console.log("Render Select");
// }
// function renderText() {
//   console.log("Render Text");
// }
// function renderCheckbox() {
//   console.log("Render Checkbox");
// }
// function renderHtmlElement(element: string) {
//   switch (element) {
//     case "select":
//       renderSelect();
//       break;
//     case "text":
//       renderText();
//       break;
//     case "checkbox":
//       renderCheckbox();
//       break;
//   }
// }
// renderHtmlElement("checkbox");
// interface HTMLRenderer {
//   render: () => void;
// }
// class TextBox implements HTMLRenderer {
//   render() {
//     console.log("Render Text");
//   }
// }
// class Select implements HTMLRenderer {
//   render() {
//     console.log("Render Select");
//   }
// }
// class Checkbox implements HTMLRenderer {
//   render() {
//     console.log("Render Checkbox");
//   }
// }
// function renderElement(element: HTMLRenderer): void {
//   element.render();
// }
// const textBoxEl = new TextBox();
// const selectEl = new Select();
// const checkboxEl = new Checkbox();
// renderElement(textBoxEl);
// renderElement(selectEl);
// renderElement(checkboxEl);
// Single responsibility
// class StudentWorst {}
// class EmailService {
//   sendAnEmail(email: string) {}
// }
// class Student {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
// }
// class EnrolmentService {
//   enrolCourse() {}
// }
// class StudentRepository {
//   saveToDB() {}
//   // CRUD operations
//   // create
//   // read
//   // update
//   // delete
// }
// Open-closed
// open for extension, closed for modification
// class Machine {
//   engineType: string;
//   constructor(engineType: string) {
//     this.engineType = engineType;
//   }
//   engine() {
//     console.log("Engine type: " + this.engineType);
//   }
// }
// class Car extends Machine {
//   constructor(engineType: string) {
//     super(engineType);
//   }
//   private model: string;
// }
// const car1 = new Car("Petrol");
// car1.engine();
// class Parent {
//   protected x: string;
//   constructor() {}
// }
// class Child extends Parent {
//   constructor() {
//     super();
//     this.x;
//   }
// }
// const parentTest = new Parent();
// const child = new Child();
// interface UserDetails {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// interface Geo {
//   lat: string;
//   lng: string;
// }
// interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }
// class MyGeo implements Geo {
//   lat: string;
//   lng: string;
// }
// class MyAddress implements Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }
// interface MyUser extends UserDetails {
//   address: Address;
//   phone: string;
//   website: string;
//   company: MyCompany;
// }
// interface MyCompany {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
// class User implements UserDetails {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// class Company implements MyCompany {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
// // Dependancy Inversion (Principle) -> Dependency Injection (Pattern)
// class Wallet {
//   balance: number;
//   //   currency: string;
//   constructor(balance: number) {
//     this.balance = balance;
//     // this.currency = currency;
//   }
// }
// class Course {
//   courses: string;
//   constructor(courses: string) {
//     this.courses = courses;
//   }
// }
// class User {
//   username: string;
//   wallet: Wallet;
//   course: Course;
//   constructor(username: string, wallet: Wallet, courses: Course) {
//     this.username = username;
//     this.wallet = wallet;
//     this.course = courses;
//   }
// }
// const ivansWallet = new Wallet(400);
// const ivansCourses = new Course("Programming Basics");
// const ivanUser = new User("vankata92", ivansWallet, ivansCourses);
// console.log(ivanUser.wallet.balance);
// const mariasWallet = new Wallet(3400);
// const mariasCourses = new Course("Programming Advanced");
// const mariasUser = new User("maria", mariasWallet, mariasCourses);
// console.log(mariasUser.wallet.balance);
// THE WORST PRACTICE
// class User {
//   username: string;
//   wallet: Wallet;
//   course: Course;
//   constructor(
//     username: string,
//     balance: number,
//     currency: string,
//     courses: string
//   ) {
//     this.username = username;
//     this.wallet = new Wallet(balance, currency);
//     this.course = new Course(courses);
//   }
// }
// const peshoUser = new User("pesho123", 500, "BGN", "Art,Sports,Math");
// console.log(peshoUser.username);
// console.log(peshoUser.wallet.balance);
// const mariaUser = new User("Maria213", 300, "USD", "Art, Math");
// console.log(mariaUser.username);
// console.log(mariaUser.wallet.balance);
// class Person {
//   static personInitiatedCount = 0;
//   constructor() {
//     Person.personInitiatedCount += 1;
//   }
// }
// const p1 = new Person();
// const p2 = new Person();
// const p3 = new Person();
// console.log(Person.personInitiatedCount);
class Person {
    constructor() {
        this.id = "asdksahkjdhsa";
    }
    get fullName() {
        console.log("getter invoked");
        // INVOKE FUNTIONALITY ON READ
        return this._fullName;
    }
    set fullName(fName) {
        console.log("setter invoked");
        // VALIDATINF INPUT
        this._fullName = fName;
    }
}
const p = new Person();
p.id = 123;
p.fullName = "Ivan Kirov";
console.log(p.fullName);
