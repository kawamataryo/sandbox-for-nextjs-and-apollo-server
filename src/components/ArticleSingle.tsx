import * as React from 'react';
import { Post } from '../lib/types';
import Link from 'next/link';

type ArticleProps = {
  post: Post;
};

export const ArticleSingle: React.FC<ArticleProps> = ({ post }) => {
  return (
    <>
      <div className="card mb-5">
        <div className="card-image">
          <figure className="image is-3by1">
            <img
              src={`https://picsum.photos/id/${post.id * 10}/1000/400`}
              alt="image"
            />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="has-text-weight-bold is-size-5">{post.title}</h1>
          <p>{post.content}</p>
        </div>
      </div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
};
