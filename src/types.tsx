export type Data = {
  image: string;
  info: string;
  link: string;
};

export type State = {
  side1: string;
  side2: string;
  side3: string;
  type?: "equilateral" | "isosceles" | "scalene" | "Not a Triangle" | undefined;
};
