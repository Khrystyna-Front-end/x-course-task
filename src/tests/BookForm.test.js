import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookForm from "../Components/SpecificBook/BookForm.js";

describe("BookForm component", () => {
  test("clicking the arrow up increases the quantity", () => {
    const { getByTestId } = render(<BookForm />);
    const quantityInput = getByTestId("numberInput");
    fireEvent.change(quantityInput, { target: { value: "2" } });
    fireEvent.click(quantityInput.nextElementSibling);
    expect(quantityInput.value).toBe("3");
  });

  test("clicking the arrow down decreases the quantity", () => {
    const { getByTestId } = render(<BookForm />);
    const quantityInput = getByTestId("numberInput");
    fireEvent.change(quantityInput, { target: { value: "3" } });
    fireEvent.click(quantityInput.previousElementSibling);
    expect(quantityInput.value).toBe("2");
  });

  test("changing the quantity updates the total book cost", () => {
    const { getByTestId, getByText } = render(<BookForm />);
    const quantityInput = getByTestId("numberInput");
    fireEvent.change(quantityInput, { target: { value: "4" } });
    expect(getByText("10.99")).toBeInTheDocument();
  });
});
