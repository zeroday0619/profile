import { registerHooks } from "node:module";
import { load } from "./opennext-loader.mjs";

// The loader keeps Next.js 16.4 manifests available until OpenNext includes the upstream fix.
registerHooks({ load });

const adapterUrl = import.meta.resolve("@opennextjs/cloudflare");
await import(new URL("../cli/index.js", adapterUrl).href);
