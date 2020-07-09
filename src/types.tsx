export type Data = {
  image: string;
  info: string;
  link: string;
};

export type TType = {
  type?: "equilateral" | "isosceles" | "scalene" | "Not a Triangle" | undefined;
};

export type Sides = { side1: string; side2: string; side3: string };

export type State = Sides & TType;

export type ActionType = { type: string; payload: Sides };

export type CardProps = Data & TType;
