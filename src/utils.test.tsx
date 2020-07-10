import { triangleType } from "./utils";

describe("triangleType", () => {
  it("will return equilateral as type", () =>
    expect(triangleType(5, 5, 5)).toEqual("equilateral"));

  it("will return isosceles as type", () => {
    expect(triangleType(5, 5, 6)).toEqual("isosceles");
    expect(triangleType(5, 6, 5)).toEqual("isosceles");
    expect(triangleType(6, 5, 5)).toEqual("isosceles");
  });

  it("will return scalene as type", () =>
    expect(triangleType(5, 6, 7)).toEqual("scalene"));

  it("will return 'Not a Triangle'", () => {
    expect(triangleType(5, 5, 10)).toEqual("Not a Triangle");
    expect(triangleType(10, 5, 5)).toEqual("Not a Triangle");
    expect(triangleType(5, 10, 5)).toEqual("Not a Triangle");
  });
});
