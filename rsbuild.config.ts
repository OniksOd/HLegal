import { defineConfig } from "@rsbuild/core";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  source: {
    entry: {
      index: "./src/index.ts",
      services: "./src/index.ts",
    },
    include: ["./"],
  },
  plugins: [pluginSass()],
  html: {
    template({ entryName }) {
      const templates = {
        index: "./index.html",
        services: "./services.html",
      };
      return templates[entryName];
    },
  },
  dev: {
    watchFiles: {
      paths: ["./index.html", "./services.html"],
    },
    liveReload: true,
    hmr: true,
  },
  server: {
    base: "/HLegal/",
    // htmlFallback: "index",
    historyApiFallback: {
      index: "./index.html",
    },
  },
});
