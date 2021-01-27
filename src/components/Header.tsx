import * as React from 'react';
import { Head } from 'next/document';

export const Header: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Next.js SSG + CSR</h1>
          <h2 className="subtitle">Sample projects for Next.js SSG + CSR</h2>
        </div>
      </div>
    </section>
  );
};
