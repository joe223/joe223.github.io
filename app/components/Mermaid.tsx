'use client';

import { domToBlob } from 'modern-screenshot';
import { renderMermaidSVG } from 'beautiful-mermaid';
import { useState, useRef } from 'react';

interface MermaidProps {
  code: string;
}

export default function Mermaid({ code }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopy = async () => {
    if (!ref.current) return;
    const svg = ref.current.querySelector('svg');
    if (!svg) return;

    try {
      const blob = await domToBlob(svg, { scale: 2, type: 'image/png' });
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
setError('Failed');
setTimeout(() => setError(null), 1500);
    }
  };

  try {
    const svg = renderMermaidSVG(code, {
      bg: '#fefefe',
      fg: '#111',
      transparent: true,
    });
    return (
      <div ref={ref} className="mermaid-wrapper">
        <div dangerouslySetInnerHTML={{ __html: svg }} />
        <button
          className="mermaid-copy-btn"
          onClick={handleCopy}
          title="Copy image"
        >
          {copied ? 'Copied' : error || 'Copy'}
        </button>
      </div>
    );
  } catch {
    return <pre className="mermaid-error">{code}</pre>;
  }
}