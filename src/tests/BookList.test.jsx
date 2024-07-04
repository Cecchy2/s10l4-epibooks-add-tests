import { describe, expect, it } from "vitest";
import BookList from "../components/BookList";
import { fireEvent, render, screen } from "@testing-library/react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import userEvent from "@testing-library/user-event";

describe("bootstrap cards rendered equals to number of books in the json file", () => {
  it("Render the correct number of cards for fantasy Genre", async () => {
    render(<BookList />);
    const booksImages = await screen.findAllByRole("img");
    expect(booksImages).toHaveLength(fantasy.length);
  });

  it("Render the correct number of cards for history Genre"),
    async () => {
      render(<BookList />);

      const historyBtn = screen.getByText(/history/i);
      fireEvent.click(historyBtn);
      const booksImages = await screen.findAllByRole("img");
      expect(booksImages).toHaveLength(history.length);
    };
  it("Render the correct number of cards for horror Genre"),
    async () => {
      render(<BookList />);

      const horrorBtn = screen.getByText(/horror/i);
      fireEvent.click(horrorBtn);
      const booksImages = await screen.findAllByRole("img");
      expect(booksImages).toHaveLength(horror.length);
    };
  it("Render the correct number of cards for romance Genre"),
    async () => {
      render(<BookList />);

      const romanceBtn = screen.getByText(/romance/i);
      fireEvent.click(romanceBtn);
      const booksImages = await screen.findAllByRole("img");
      expect(booksImages).toHaveLength(romance.length);
    };
  it("Render the correct number of cards for sciFi Genre"),
    async () => {
      render(<BookList />);

      const scifiBtn = screen.getByText(/scifi/i);
      fireEvent.click(scifiBtn);
      const booksImages = await screen.findAllByRole("img");
      expect(booksImages).toHaveLength(scifi.length);
    };

  it("properly card become red bordered after click"),
    async () => {
      render(<BookList />);

      const selectedBook = await screen.findByText(/The Last Wish: Introducing the Witcher/i);
      fireEvent.click(selectedBook);
      expect(selectedBook).toHaveClass("selected-card");
    };

  /* --------------Test carta selezionata----------- */

  it("properly card become red bordered after click"),
    async () => {
      render(<BookList />);

      const selectedBook = await screen.findByText(/The Last Wish: Introducing the Witcher/i);
      fireEvent.click(selectedBook);

      const secondBook = await screen.findByText(/Sword of Destiny (The Witcher)/i);

      expect(selectedBook).not.toHaveClass("selected-card");

      expect(secondBook).toHaveClass("selected-card");
    };

  /* -----------Test funzionamento Input-------------- */

  it("input filter works properly"),
    async () => {
      const inputField = await screen.getByPlaceholderText(/Cerca il tuo libro/i);

      fireEvent.change(inputField, { target: { value: "some book" } });

      const filteredResults = await screen.findAllByText(/game/i);
      expect(filteredResults).toHaveLength(2);
    };
});
