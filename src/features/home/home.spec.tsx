import { describe, expect, it } from "vitest";
import { Home } from "./home";
import { render, screen } from "@testing-library/react";

describe("home", () => {
  it("renders", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
  });
});
