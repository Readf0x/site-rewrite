import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const fullReloadAlways = {
  handleHotUpdate({ server }) {
    server.ws.send({ type: "full-reload" });
    return [];
  }
};

export default defineConfig({
  plugins: [sveltekit()]
});
