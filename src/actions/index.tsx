import { ActionType, Sides } from "../types";

export function getTriangle(payload: Sides): ActionType {
  console.log("get triangle happen");
  return { type: "FIND_TRIANGLE", payload };
}
