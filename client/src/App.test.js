import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/header.js";
import UserForm from "./components/user";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// First Test - Check if Welcome to my game is present:
test("Welcome to my game", () => {
  render(<Header />);
  expect(screen.getByText(/Welcome to the game:/));
});

//Second Test - Check whether the placeholder text works.
test("check if email element is in form", () => {
  render(<UserForm />);
  expect(screen.getByPlaceholderText(/Please enter your name/));
});
