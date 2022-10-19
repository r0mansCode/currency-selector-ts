import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "./App";
import { render, fireEvent, screen } from "@testing-library/react";
import currencyList from "./data/currencyList.json";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<App />);
  });
});

it("should display the correct number of currencies available", () => {
  const data = currencyList;
  render(<App />);
  expect(screen.getAllByTestId("currencyLabel").length).toBe(9);
});

describe("<App />", () => {
  it("should display that currency was added after clicking on it", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/EUR/i));
    expect(screen.getAllByText(/EUR/i).length).toBe(2);
  });
});
