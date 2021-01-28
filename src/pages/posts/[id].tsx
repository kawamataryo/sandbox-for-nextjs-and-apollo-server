import * as React from 'react';
import Layout from '../../components/layouts/Layout';
import { Header } from '../../components/Header';
import { NextPage } from 'next';
import { ArticleSingle } from '../../components/ArticleSingle';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Query, QueryPostArgs } from '../../types/schema';
import { POST_QUERY, POSTS_QUERY } from '../../apollo/queries';

const SinglePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // 投稿の取得
  const { data } = useQuery<{ post: Query['post'] }, QueryPostArgs>(
    POST_QUERY,
    { variables: { id: Number(id) } }
  );

  return (
    <Layout>
      <Header />
      {data?.post ? (
        <ArticleSingle post={data.post} />
      ) : (
        <progress className="progress is-primary" max="100" />
      )}
    </Layout>
  );
};

export default SinglePage;
