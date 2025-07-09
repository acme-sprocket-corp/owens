import type { Preview } from "@storybook/react-vite";
import "../src/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      codePanel: true,
    },
  },
  tags: ["autodocs"],
};

export default preview;
