import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});
config.buildCommand = "corepack yarn build";

export default config;
