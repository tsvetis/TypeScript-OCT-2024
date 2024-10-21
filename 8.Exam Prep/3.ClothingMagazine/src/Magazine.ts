import { Cloth } from "./Cloth";

export class Magazine {
  type: string;
  capacity: number;
  clothes: Cloth[] = [];

  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }

  removeCloth(color: string): boolean {
    const index = this.clothes.findIndex((c) => c.color === color);

    if (index != -1) {
      this.clothes.splice(index, 1);
      return true;
    }

    return false;
  }

  getSortedBySize() {
    return this.clothes.sort((a, b) => a.size - b.size);
  }

  //   Method getSmallestCloth() – returns the Cloth with the smallest Size
  getSmallestCloth(): Cloth {
    if (this.clothes?.length === 0) {
      return {} as Cloth;
    }

    if (this.clothes?.length === 1) {
      return this.clothes[0];
    }

    const sorted = this.getSortedBySize();
    return sorted[0];
  }

  getCloth(color: string): Cloth {
    const cloth = this.clothes.find((c) => c.color === color);
    return cloth;
  }

  getClothCount() {
    return this.clothes.length;
  }

  report(): string {
    const sorted = this.getSortedBySize();
    const clothesReport = sorted.map((c) => c.toString()).join("\n");

    return `${this.type} magazine contains:\n${clothesReport}`;
  }
}
