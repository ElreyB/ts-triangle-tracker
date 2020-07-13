export type Data = {
  image: string;
  info: string;
  link: string;
};

export type TType = "equilateral" | "isosceles" | "scalene" | "Not a Triangle";

export type Sides = { side1: string; side2: string; side3: string };

export type State = {
  type: TType;
} & Sides;

export type ActionType = { type: string; payload: Sides };

export type CardProps = {
  type?: TType;
} & Data;
