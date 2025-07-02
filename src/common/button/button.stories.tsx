import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { fn } from "storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    content: "Button",
    handleOnClick: fn(),
  },
};
