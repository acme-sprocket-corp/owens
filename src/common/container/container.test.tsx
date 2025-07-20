import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./container";

describe("container", () => {
  it("renders children", () => {
    render(
      <Container>
        <h2>container!</h2>
      </Container>,
    );

    expect(
      screen.getByRole("heading", { name: /container/i }),
    ).toBeInTheDocument();
  });
});
