import { describe } from "vitest";
import App from "../App";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("h1 is in the page", () => {
  it("Mounts the h1 correctly", () => {
    render(<Welcome />);

    screen.debug();

    const heading = screen.getByText(/Benvenuti nel mio BookShoop/i);

    expect(heading).toBeInTheDocument();
  });
});
