import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/header.js";
import UserForm from "./components/user";

//Second Test - Check whether the placeholder text works.
test("check if email element is in form", () => {
  render(<UserForm />);
  expect(screen.getByPlaceholderText(/Please enter your name/));
});
