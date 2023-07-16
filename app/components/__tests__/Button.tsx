import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("<Button />", () => {
  test("Render Button with label", () => {
    render(<Button label='Click me' />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Render Button with icon", () => {
    const Icon = () => (
      <svg>
        <path />
      </svg>
    );
    render(<Button label='Click me' icon={Icon} />);
    const icon = screen.getByRole("button");
    expect(icon).toBeInTheDocument();
  });

  test("Button onClick function is called when clicked", () => {
    const onClick = jest.fn();
    render(<Button label='Click me' onClick={onClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });

  test("Button is disabled when disabled prop is provided", () => {
    render(<Button label='Click me' disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("Button has appropriate styles with outline prop", () => {
    render(<Button label='Click me' outline />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("border-black");
    expect(button).toHaveClass("text-black");
  });

  test("Button has appropriate styles with small prop", () => {
    render(<Button label='Click me' small />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("py-1");
    expect(button).toHaveClass("text-sm");
  });

  test("Button has appropriate styles without outline or small prop", () => {
    render(<Button label='Click me' />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-teal-500");
    expect(button).toHaveClass("border-teal-500");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("py-3");
    expect(button).toHaveClass("text-md");
  });
});
