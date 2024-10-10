// NOT SINGLETON
// class Test {
//   id: number;
//   constructor() {
//     this.id = Math.floor(Math.random() * 100);
//   }
// }
// for (let i = 0; i < 100; i++) {
//   const t1 = new Test();
//   console.log(t1.id);
// }
// const t2 = new Test();
// console.log(t2.id);
// Singleton pattern
// class Singleton {
//   private static instance: Singleton | null = null;
//   id: number;
//   private constructor() {
//     this.id = Math.floor(Math.random() * 100);
//   }
//   public static getIntance(): Singleton {
//     if (this.instance === null) {
//       this.instance = new Singleton();
//     }
//     return this.instance;
//   }
// }
// Strategy
// interface DeliveryStrategy {
//   calculateCost(weight: number, distance: number): number;
// }
// class FedExStrategy implements DeliveryStrategy {
//   calculateCost(weight: number, distance: number): number {
//     return (weight * distance) ^ 2;
//   }
// }
// class EcontStrategy implements DeliveryStrategy {
//   calculateCost(weight: number, distance: number): number {
//     return (weight * distance) / 100;
//   }
// }
// class SpeedyStrategy implements DeliveryStrategy {
//   calculateCost(weight: number, distance: number): number {
//     return (weight * distance - 100) / 100;
//   }
// }
// class DeliveryCalculationCost {
//   private deliveryStrategy: DeliveryStrategy;
//   constructor(deliveryStrategy: DeliveryStrategy) {
//     this.deliveryStrategy = deliveryStrategy;
//   }
//   calculatedBasedOnStrategy(weight: number, distance: number): number {
//     // validate input always
//     return this.deliveryStrategy.calculateCost(weight, distance);
//   }
// }
// const fedexDelivery = new FedExStrategy();
// const econtDelivery = new EcontStrategy();
// const speedyDelivery = new SpeedyStrategy();
// // FEDEX?
// const fedex = new DeliveryCalculationCost(fedexDelivery);
// console.log(fedex.calculatedBasedOnStrategy(10, 100));
// // ECONT?
// const econt = new DeliveryCalculationCost(econtDelivery);
// console.log(econt.calculatedBasedOnStrategy(10, 100));
// // Speedy?
// const speedy = new DeliveryCalculationCost(speedyDelivery);
// console.log(speedy.calculatedBasedOnStrategy(10, 100));
// // Factory
// interface Car {
//   model: string;
//   drive: () => void;
// }
// class BMW implements Car {
//   model = "BMW";
//   drive() {
//     console.log(`You are driving ${this.model}`);
//   }
// }
// class Tesla implements Car {
//   model = "Tesla";
//   drive() {
//     console.log(`You are driving ${this.model}`);
//   }
// }
// class VW implements Car {
//   model = "VW";
//   drive() {
//     console.log(`You are driving ${this.model}`);
//   }
// }
// class CarFactory {
//   createCar(model: string) {
//     if (model === "Tesla") {
//       return new Tesla();
//     } else if (model === "VW") {
//       return new VW();
//     } else if (model === "BMW") {
//       return new BMW();
//     } else {
//       const msg = `Car model: ${model} is not supported!`;
//       throw new Error(msg);
//     }
//   }
// }
// const carFactory = new CarFactory();
// const myTeslaCar = carFactory.createCar("Tesla");
// console.log(myTeslaCar.model);
// const myBMW = carFactory.createCar("BMW");
// console.log(myBMW.model);
// const myVW = carFactory.createCar("VW");
// console.log(myVW.model);
// const myTest = carFactory.createCar("Test");
// ABSTRACT Factory
// interface Car {
//   model: string;
//   drive: () => void;
// }
// interface GPS {
//   brand: string;
//   showLocation: () => void;
// }
// class BMW implements Car {
//   model = "BMW";
//   drive() {
//     console.log(`You are driving ${this.model}`);
//   }
// }
// class BMWGPS implements GPS {
//   brand = "BMW GPS";
//   showLocation() {
//     console.log(`Showing location on ${this.brand}`);
//   }
// }
// class Tesla implements Car {
//   model = "Tesla";
//   drive() {
//     console.log(`You are driving ${this.model}`);
//   }
// }
// class TeslaGPS implements GPS {
//   brand = "Tesla GPS";
//   showLocation() {
//     console.log(`Showing location on ${this.brand}`);
//   }
// }
// class VW implements Car {
//   model = "VW";
//   drive() {
//     console.log(`You are driving ${this.model}`);
//   }
// }
// class VWGPS implements GPS {
//   brand = "VW GPS";
//   showLocation() {
//     console.log(`Showing location on ${this.brand}`);
//   }
// }
// interface CarFactory {
//   createCar: () => Car;
//   createGPS: () => GPS;
// }
// class TeslaCarFactory implements CarFactory {
//   createCar() {
//     return new Tesla();
//   }
//   createGPS() {
//     return new TeslaGPS();
//   }
// }
// class BMWCarFactory implements CarFactory {
//   createCar() {
//     return new BMW();
//   }
//   createGPS() {
//     return new BMWGPS();
//   }
// }
// class VWCarFactory implements CarFactory {
//   createCar() {
//     return new VW();
//   }
//   createGPS() {
//     return new VWGPS();
//   }
// }
// function clientRequest(factory: CarFactory) {
//   const car = factory.createCar();
//   car.drive();
//   const gps = factory.createGPS();
//   gps.showLocation();
// }
// clientRequest(new BMWCarFactory());
// console.log("--------------");
// clientRequest(new VWCarFactory());
// console.log("--------------");
// clientRequest(new TeslaCarFactory());
// // Adapter
// interface Social {
//   email: string;
// }
// interface DataApi {
//   name: string;
//   age: number;
//   social: Social;
// }
// interface APIType {
//   data: DataApi;
// }
// class API {
//   fetchData(): APIType {
//     return {
//       data: {
//         name: "John Doe",
//         age: 21,
//         social: {
//           email: "john.doe@gmail.com",
//         },
//       },
//     };
//   }
// }
// interface JustifyData {
//   name: string;
//   age: number;
//   email: string;
// }
// class Converter implements JustifyData {
//   apiData: API;
//   constructor(apiData: API) {
//     this.apiData = apiData;
//   }
//   get name(): string {
//     return this.apiData.fetchData().data.name;
//   }
//   get age(): number {
//     return this.apiData.fetchData().data.age;
//   }
//   get email(): string {
//     return this.apiData.fetchData().data.social.email;
//   }
// }
// // ----------
// const api = new API();
// const adaptedData = new Converter(api);
// console.log(adaptedData.name);
// console.log(adaptedData.age);
// console.log(adaptedData.email);
