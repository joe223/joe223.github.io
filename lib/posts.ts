import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'content/docs');

export interface DocPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

function extractExcerpt(content: string): string {
  const lines = content.split('\n').filter(line => 
    line.trim() && !line.startsWith('#') && !line.startsWith('---')
  );
  return lines.slice(0, 3).join(' ').slice(0, 150);
}

export function getAllDocs(): DocPost[] {
  const files = fs.readdirSync(docsDirectory);
  
  const posts = files
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx?$/, '');
      const filePath = path.join(docsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        slug,
        title: data.title || slug,
        date: typeof data.date === 'string' ? data.date : String(data.date || ''),
        excerpt: extractExcerpt(content),
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

export function getDocBySlug(slug: string): DocPost | null {
  try {
    const filePath = path.join(docsDirectory, `${slug}.md`);
    const altFilePath = path.join(docsDirectory, `${slug}.mdx`);
    
    let fileContent: string;
    let actualPath: string;
    
    if (fs.existsSync(filePath)) {
      actualPath = filePath;
      fileContent = fs.readFileSync(filePath, 'utf8');
    } else if (fs.existsSync(altFilePath)) {
      actualPath = altFilePath;
      fileContent = fs.readFileSync(altFilePath, 'utf8');
    } else {
      return null;
    }
    
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      title: data.title || slug,
      date: typeof data.date === 'string' ? data.date : String(data.date || ''),
      excerpt: extractExcerpt(content),
      content,
    };
  } catch {
    return null;
  }
}