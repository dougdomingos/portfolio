import Container from '@components/layout/Container';
import components from '@components/mdx/MDXBase';
import { formatDate } from '@lib/formatDate';
import { getPost } from '@lib/getPost';
import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import path from 'path';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

// MDX configuration
const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src/posts'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

export default function PostPage({ params }: any) {
  const props = getPost(params.slug);

  return (
    <Container className='min-h-screen py-8'>
      <article className='w-full'>
        <div className='flex flex-col gap-2 mb-4'>
          <h1 className='text-4xl font-display font-bold'>
            {props.frontMatter.title}
          </h1>
          <span className='text-lg italic'>
            {formatDate(new Date(props.frontMatter.postDate), 'long')} | Douglas
            Domingos
          </span>
        </div>
        <hr className='border-2 border-primary-light' />
        <div className='py-4 text-lg'>
          <MDXRemote
            source={props.content}
            options={options}
            components={components}
          />
        </div>
      </article>
    </Container>
  );
}
