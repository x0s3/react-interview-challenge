/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

const renderComponent = () => render(<Counter />);

afterEach(cleanup);

describe("Counter", () => {
  describe("when clicking on INCREMENT", () => {
    it("increments the counter value", async () => {
      renderComponent();

      await userEvent.click(screen.getByText("INCREMENT"));

      expect(screen.getByText("Current Value 0"));
    });
  });

  describe("when clicking on BULK INCREMENT", () => {
    it("increments the counter value", async () => {
      renderComponent();

      await userEvent.click(screen.getByText("BULK INCREMENT"));

      expect(screen.getByText("Current Value 3"));
    });
  });

  describe("when resetting the Counter", () => {
    it("resets the value of the counter", async () => {
      const { rerender } = renderComponent();

      await userEvent.click(screen.getByText("INCREMENT"));
      rerender(<Counter />);

      expect(screen.getByText("Current Value 0"));
    });
  });
});
