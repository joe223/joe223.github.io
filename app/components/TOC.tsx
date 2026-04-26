'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export default function TOC() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.doc-content',
      headingSelector: 'h2, h3',
      hasInnerContainers: false,
      headingsOffset: 100,
      scrollSmoothOffset: -80,
    });

    return () => {
      tocbot.destroy();
    };
  }, []);

  return (
    <nav className="toc" />
  );
}