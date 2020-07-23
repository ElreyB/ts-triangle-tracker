import React from "react";
import { render, screen } from "../../test-utils";
import Card from "./Card";
import { State, TType } from "../../types";
import data from "../../data";

const triangleData: State[] = [
  { type: "equilateral", side1: "5", side2: "5", side3: "5" },
  { type: "scalene", side1: "5", side2: "6", side3: "7" },
  { type: "isosceles", side1: "5", side2: "5", side3: "6" },
  { type: "Not a Triangle", side1: "5", side2: "5", side3: "10" },
];
describe("<Card/>", () => {
  for (const index in triangleData) {
    it("renders Card component", () => {
      render(<Card />, {
        initialState: triangleData[index],
      });
      const triangleType: TType = triangleData[index].type as TType;
      const typeTitle: string =
        triangleType.slice(0, 1).toUpperCase() + triangleType.slice(1);
      const altImage = new RegExp(`${triangleType} triangle`, "i");
      expect(screen.getByText(typeTitle)).toBeInTheDocument();
      expect(screen.getByAltText(altImage)).toBeInTheDocument();
      expect(
        screen.getByText(data[triangleType as keyof typeof data].info)
      ).toBeInTheDocument();
    });
  }
});
