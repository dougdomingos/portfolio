import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import { Pluggable } from 'unified';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',

  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    postDate: { type: 'date', required: true },
    topics: { type: 'list', of: { type: 'string' }, required: true },
  },

  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkEmoji] as Pluggable[],
    rehypePlugins: [rehypeCodeTitles, rehypePrism] as Pluggable[],
  },
});
