import * as React from 'react';
import { Post } from '../lib/types';
import Link from 'next/link';

type ArticleProps = {
  post: Post;
  onDelete: (id: number) => void;
};

export const Article: React.FC<ArticleProps> = ({ post, onDelete }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <Link href={`/posts/${post.id}`}>
              <a>
                <img
                  src={`https://picsum.photos/id/${post.id * 10}/128/128`}
                  alt="Image"
                />
              </a>
            </Link>
          </figure>
        </div>
        <div className="media-content">
          <Link href={`/posts/${post.id}`}>
            <a>
              <h1 className="has-text-weight-bold is-size-5">{post.title}</h1>
            </a>
          </Link>
          <p>{post.content}</p>
        </div>
        <button
          className="button is-small is-danger has-text-weight-bold is-light"
          onClick={() => onDelete(post.id)}
        >
          delete
        </button>
      </article>
    </div>
  );
};
