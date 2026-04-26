import Nav from '../../components/Nav';
import { getDocBySlug, getAllDocs } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllDocs();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getDocBySlug(slug);
  
  if (!post) return { title: 'Not Found' };
  
  return { title: post.title };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getDocBySlug(slug);
  
  if (!post) notFound();
  
return (
    <>
      <Nav />
      <main>
        <header className="doc-header">
        <h1 className="doc-title">{post.title}</h1>
        <span className="doc-date">{post.date}</span>
      </header>

      <article className="doc-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>
    </main>
    </>
  );
}