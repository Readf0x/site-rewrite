import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex, escapeSvelte } from "mdsvex";
import { readFileSync } from "node:fs";
import shiki from "shiki";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    /** @type {import('mdsvex').MdsvexOptions} */
    mdsvex({
      extensions: [".md"],
      highlight: {
        highlighter: async (code, lang = 'text') => {
          const highlighter = await shiki.getHighlighter({ theme: JSON.parse(readFileSync("./src/lib/shiki/mocha.json")) })
          const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
          return `{@html \`<div class="code-wrapper">${html}<div class="code-wrapper">\` }`
        }
      },
      smartypants: true
    }),
    vitePreprocess()
  ],
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter()
  }
};

export default config;
