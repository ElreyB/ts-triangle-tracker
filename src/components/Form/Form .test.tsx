import React from "react";
import { render, screen, fireEvent } from "../../test-utils";
import { State } from "../../types";
import Form from "./Form";

const defualtState: State = {
  type: undefined,
  side1: "",
  side2: "",
  side3: "",
};

const labels: string[] = ["Side 1:", "Side 2:", "Side 3:"];

describe("<Form />", () => {
  for (const index in labels) {
    it("renders Form component", () => {
      render(<Form />, { initialState: defualtState });
      expect(screen.getByLabelText(`${labels[index]}`).value).toBe("");
    });

    it("change input value on change event", () => {
      render(<Form />, { initialState: defualtState });
      fireEvent.change(screen.getByLabelText(`${labels[index]}`), {
        target: { value: 4 },
      });
      expect(screen.getByLabelText(`${labels[index]}`).value).toBe("4");
    });
  }
});
