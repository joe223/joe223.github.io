import Nav from '../../components/Nav';
import Mermaid from '../../components/Mermaid';
import TOC from '../../components/TOC';
import { getDocBySlug, getAllDocs } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

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
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={{
              code: ({ className, children, ...props }) => {
                const isInline = !className;
                if (isInline) {
                  return <code className={className} {...props}>{children}</code>;
                }
                const lang = className?.replace(/language-/, '');
                if (lang === 'mermaid') {
                  return <Mermaid code={String(children).trim()} />;
                }
                return (
                  <pre className={className}>
                    <code {...props}>{children}</code>
                  </pre>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        <TOC />
      </main>
    </>
  );
}