'use client';

import { useEffect, useRef } from 'react';

export default function TOC() {
  const tocbotRef = useRef<typeof import('tocbot') | null>(null);

  useEffect(() => {
    import('tocbot').then((tocbot) => {
      tocbotRef.current = tocbot;
      tocbot.init({
        tocSelector: '.toc',
        contentSelector: '.doc-content',
        headingSelector: 'h2, h3',
        hasInnerContainers: false,
        headingsOffset: 100,
        scrollSmoothOffset: -80,
      });
    });

    return () => {
      if (tocbotRef.current) {
        tocbotRef.current.destroy();
      }
    };
  }, []);

  return (
    <nav className="toc" />
  );
}