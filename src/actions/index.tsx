import { ActionType, Sides } from "../types";

export function getTriangle(payload: Sides): ActionType {
  console.log("get triangle happen");
  return { type: "FIND_TRIANGLE", payload };
}

export function restTriangle(payload: Sides): ActionType {
  console.log("rest triangle happen");
  return { type: "REST_TRIANGLE", payload };
}
