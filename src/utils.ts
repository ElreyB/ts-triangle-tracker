export function triangleType(
  side1: number,
  side2: number,
  side3: number
): string {
  let type = "";
  if (side1 === side2 && side2 === side3) {
    type = "equilateral";
  } else if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    type = "Not a Triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    type = "sosceles";
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    type = "scalene";
  }
  return type;
}
