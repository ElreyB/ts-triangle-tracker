import { ActionType, Sides } from "../types";

export function getTriangle(payload: Sides): ActionType {
  return { type: "FIND_TRIANGLE", payload };
}

export function restTriangle(payload: Sides): ActionType {
  return { type: "REST_TRIANGLE", payload };
}
