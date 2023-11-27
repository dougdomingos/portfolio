import Container from '@components/layout/Container';
import { mdxComponents } from '@components/mdx/MDXComponents';
import { formatDate } from '@lib/formatDate';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.url.includes(params.slug))!;

  return {
    title: post.title,
    description: post.description,
    keywords: post.topics,
    authors: [
      { name: 'Douglas Domingos', url: 'https://github.com/dougdomingos' },
    ],
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.url.includes(params.slug))!;

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Container className='min-h-screen py-8'>
      <article className='w-full'>
        <header className='flex flex-col gap-2 mb-4'>
          <h1 className='text-4xl font-display font-bold'>{post.title}</h1>
          <span className='text-lg'>
            Douglas Domingos - {formatDate(new Date(post.postDate), 'long')}
          </span>
        </header>
        <hr className='border dark:opacity-25' />
        <main className='py-4'>
          <MDXContent components={mdxComponents} />
        </main>
      </article>
    </Container>
  );
}
