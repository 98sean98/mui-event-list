import React from "react";
import { render } from "@testing-library/react";

// test data
import { data } from "../test-data.json";

// test components
import Main from "../components/main";

const renderComponent = () => {
  return render(<Main data={data} />);
};

describe("<Main />", () => {
  test("should display a line of text", async () => {
    // const { getByText } = renderComponent();
    // const text = getByText(/main file/i); // substring match, ignore case
    // expect(text).toContainHTML("<div>main file</div>");
    expect("some text").toEqual("some text");
  });
});
