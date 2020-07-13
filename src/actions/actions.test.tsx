import { getTriangle, restTriangle } from "./index";
import { FIND_TRIANGLE, REST_TRIANGLE } from "../constants";

describe("actions", () => {
  it("getTriangle()", () => {
    const payload = { side1: "5", side2: "5", side3: "5" };
    const expectedAction = { type: FIND_TRIANGLE, payload };
    expect(getTriangle(payload)).toEqual(expectedAction);
  });

  it("restTriangle()", () => {
    const payload = { side1: "", side2: "", side3: "" };
    const expectedAction = { type: REST_TRIANGLE, payload };
    expect(restTriangle(payload)).toEqual(expectedAction);
  });
});
