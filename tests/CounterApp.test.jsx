import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("CounterApp", () => {
  const initialValue = 100;

  test("should match with snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("should show initial value", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test("should increment on click of '+1' button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("should decrease on click of '-1' button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test("should reset to initial value upon click of 'reset' button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // name points to the aria-label of the element.
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
