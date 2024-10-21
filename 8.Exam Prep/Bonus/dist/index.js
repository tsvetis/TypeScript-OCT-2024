const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
function binarySearch(sortedArr, target, startIndex = 0, endIndex = sortedArr.length - 1) {
    if (endIndex < startIndex)
        return -1;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const currentEl = sortedArr[middleIndex];
    // Go Left
    if (currentEl > target) {
        return binarySearch(sortedArr, target, startIndex, middleIndex - 1);
    }
    // Go Right
    if (currentEl < target) {
        return binarySearch(sortedArr, target, middleIndex + 1, endIndex);
    }
    return currentEl;
}
console.log(binarySearch(arr, 11));
//# sourceMappingURL=index.js.map