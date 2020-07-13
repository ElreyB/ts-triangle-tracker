import React from "react";
import { render, screen } from "../../test-utils";
import Card from "./Card";
import { State, TType } from "../../types";

const data: State[] = [
  { type: "equilateral", side1: "5", side2: "5", side3: "5" },
  { type: "scalene", side1: "5", side2: "6", side3: "7" },
  { type: "isosceles", side1: "5", side2: "5", side3: "6" },
];
describe("<Card/>", () => {
  for (const index in data) {
    it("renders Card component", () => {
      render(<Card />, {
        initialState: data[index],
      });
      const obj: TType = data[index].type as TType;
      const type: string = obj.slice(0, 1).toUpperCase() + obj.slice(1);
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  }
});
