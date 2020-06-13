import equilateral from "./assets/equilateral.png";
import isosceles from "./assets/isosceles.png";
import scalene from "./assets/scalene.png";
import { Data } from "./types";

// type DataObj = {
//   equilateral: Data;
//   isosceles: Data;
//   scalene: Data;
// };

const data: { equilateral: Data; isosceles: Data; scalene: Data } = {
  equilateral: {
    image: `${equilateral}`,
    info:
      "In geometry, an equilateral triangle is a triangle in which all three sides are equal. In the familiar Euclidean geometry, equilateral triangles are also equiangular; that is, all three internal angles are also congruent to each other and are each 60°.",
    link: "https://en.wikipedia.org/wiki/Equilateral_triangle",
  },
  isosceles: {
    image: `${isosceles}`,
    info:
      "An isosceles triangle is a triangle with (at least) two equal sides. In the figure above, the two equal sides have length and the remaining side has length . ... An equilateral triangle is therefore a special case of an isosceles triangle having not just two, but all three sides and angles equal.",
    link: "https://en.wikipedia.org/wiki/Isosceles_triangle",
  },
  scalene: {
    image: `${scalene}`,
    info: "A scalene triangle is a triangle that has three unequal sides.",
    link: "https://en.wikipedia.org/wiki/Triangle",
  },
};

export default data;
