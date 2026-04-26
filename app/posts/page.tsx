import Nav from '../components/Nav';
import { getAllDocs } from '../../lib/posts';

export default function Posts() {
  const posts = getAllDocs();

  return (
    <>
      <Nav />
      <main>
        <header className="docs-header">
        <p className="docs-desc">Notes, thoughts, and occasional writings.</p>
      </header>

      <section className="posts">
        {posts.map((post) => (
          <article key={post.slug} className="post">
            <a href={`/posts/${post.slug}`}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <span className="post-date">{post.date}</span>
            </a>
          </article>
        ))}
      </section>
    </main>
    </>
  );
}