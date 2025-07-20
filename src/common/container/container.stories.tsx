import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./container";

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: <p>In a container!</p>,
  },
};
