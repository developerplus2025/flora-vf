// source.config.ts
import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/docs"
});
var source_config_default = defineConfig({
  mdxOptions: {
    // MDX options
  }
});
var blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  // add required frontmatter properties
  schema: frontmatterSchema.extend({
    author: z.string(),
    category: z.string(),
    date: z.string(),
    link: z.string()
  })
});
export {
  blogPosts,
  source_config_default as default,
  docs
};
