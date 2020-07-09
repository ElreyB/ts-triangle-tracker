export type Data = {
  image: string;
  info: string;
  link: string;
};

export type TType = {
  type?: "equilateral" | "isosceles" | "scalene" | "Not a Triangle" | undefined;
};

export type State = {
  side1: string;
  side2: string;
  side3: string;
} & TType;

export type Sides = { side1: string; side2: string; side3: string };

export type ActionType = { type: string; payload: Sides };

export type CardProps = {
  image: string;
  info: string;
  link: string;
} & TType;
