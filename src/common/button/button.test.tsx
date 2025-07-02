import { describe, it, vi, expect } from "vitest";
import { Button } from "./button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("button", () => {
  it("handles onClick properly", async () => {
    const user = userEvent.setup();
    const mock = vi.fn();

    render(<Button content="Button" handleOnClick={mock} />);

    await user.click(await screen.findByRole("button", { name: /button/i }));

    expect(mock).toHaveBeenCalledOnce();
  });
});
