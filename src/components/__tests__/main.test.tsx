import React from "react";
import { render } from "@testing-library/react";

import Main from "../main";

const renderComponent = () => {
  return render(<Main />);
};

describe("<Main />", () => {
  test("should display a line of text", async () => {
    const { getByText } = renderComponent();
    const text = getByText(/main file/i); // substring match, ignore case
    expect(text).toContainHTML("<div>main file</div>");
  });
});
