import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome page is mounted correctly", () => {
  it("Mounts the h1 correctly", () => {
    render(<Welcome />);

    /* screen.debug(); */

    const heading = screen.getByText(/Benvenuti nel mio BookShoop/i);

    expect(heading).toBeInTheDocument();
  });

  it("Mounts alert correctly"),
    () => {
      render(<Welcome />);

      const alerting = screen.getByText(/Tutti i Libri al 50%/i);
    };
});
