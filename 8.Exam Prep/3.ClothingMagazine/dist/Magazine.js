"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes = [];
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
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
    getSmallestCloth() {
        if (this.clothes?.length === 0) {
            return {};
        }
        if (this.clothes?.length === 1) {
            return this.clothes[0];
        }
        const sorted = this.getSortedBySize();
        return sorted[0];
    }
    getCloth(color) {
        const cloth = this.clothes.find((c) => c.color === color);
        return cloth;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const sorted = this.getSortedBySize();
        const clothesReport = sorted.map((c) => c.toString()).join("\n");
        return `${this.type} magazine contains:\n${clothesReport}`;
    }
}
exports.Magazine = Magazine;
