import * as React from 'react';
import useSWR from 'swr';
import Layout from '../components/layouts/Layout';
import { Form, FormState } from '../components/Form';
import { Article } from '../components/Article';
import { Header } from '../components/Header';
import { Post } from '../lib/types';
import { fetcher } from '../lib/fetcher';
import { NextPage } from 'next';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Mutation, Query } from '../types/schema';

const Home: NextPage = () => {
  // 一覧データの取得
  const { data, error, refetch } = useQuery<Query['posts']>(gql`
    query Posts {
      posts {
        id
        title
        content
      }
    }
  `);

  const [addPostMutation] = useMutation<Mutation['addPost']>(gql`
    mutation AddPost($title: String!, $content: String!) {
      addPost(title: $title, content: $content) {
        id
        title
        content
      }
    }
  `)

  // 投稿の追加
  const addPost = async (form: FormState) => {
    addPostMutation({ variables: form })
    refetch()
  };

  // 投稿の削除
  const deletePost = async (id: number) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    // await mutate();
  };

  return (
    <Layout>
      <Header />
      <Form submit={addPost} />
      <h1 className="title is-4 mt-6">Posts</h1>
      <div>
        {data?.posts ? (
          data.posts.map((p, index) => {
            return <Article post={p} onDelete={deletePost} key={index} />;
          })
        ) : (
          <progress className="progress is-primary" max="100" />
        )}
      </div>
    </Layout>
  );
};

export default Home;
