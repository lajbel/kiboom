// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "dist/kiboom.js"),
            name: "Kiboom",
            fileName: "kiboom",
        },
        rollupOptions: {
            external: ["kaplay"],
            output: {
                globals: {
                    vue: "kaplay",
                },
            },
        },
    },
});
