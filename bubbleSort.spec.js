const { expect } = require("chai");
const bubbleSort = require("./bubbleSort");

const testArr = [5, 7, 6, 2, 1, 3, 4];

describe("bubbleSort", () => {
  it("is a function", () => {
    expect(typeof bubbleSort).to.equal("function");
  });
  it("it returns an array", () => {
    expect(Array.isArray(bubbleSort(testArr))).to.equal(true);
  });
  it("it returns a sorted array", () => {
    const compareInt = (int1, int2) => int1 > int2;
    const returnedArr = bubbleSort(testArr, compareInt);
    expect(returnedArr).to.have.ordered.members([1, 2, 3, 4, 5, 6, 7]);
  });
});
