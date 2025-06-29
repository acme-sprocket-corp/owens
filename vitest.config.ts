import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ["src/features"],
      thresholds: {
        branches: 90,
      },
    },
    environment: "jsdom",
  },
});
