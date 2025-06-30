import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ["src/features", "src/common"],
      thresholds: {
        branches: 90,
      },
    },
    environment: "jsdom",
    setupFiles: "/src/setup-tests.ts",
  },
});
