import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("FirstApp", () => {
  const title = "Hellooo";
  const subTitle = "I'm a subtitle";

  test("should match with snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    // to make sure html structure doesnt change. u can
    // update the snapshot if u need to change it. it's useful for
    // components that should almost never change.
    expect(container).toMatchSnapshot();
  });

  test("should show correct text", () => {
    render(<FirstApp title={title} />);
    // screen.debug() // <-- u can use this to see the current rendered html in the console.
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show title as h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );

    //another way to do it:
    // const { getByText, getByTestId } = render(<FirstApp title={title} />);

    // expect(getByText(title)).toBeTruthy();

    // // const h1 = container.querySelector("h1");
    // // expect(h1.innerHTML).toContain(title);

    // expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("should show subtitle sent via props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(2);

    // another way of doing it:
    // const { getAllByText } = render(
    //   <FirstApp title={title} subTitle={subTitle} />
    // );

    // expect(getAllByText(subTitle).length).toBe(2);
  });
});
