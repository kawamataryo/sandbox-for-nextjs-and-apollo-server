import * as React from 'react';
import Layout from '../components/layouts/Layout';
import { Form, FormState } from '../components/Form';
import { Article } from '../components/Article';
import { Header } from '../components/Header';
import { NextPage } from 'next';
import { useMutation, useQuery } from '@apollo/client';
import {
  Mutation,
  MutationAddPostArgs,
  MutationDeletePostArgs,
  Query,
} from '../types/schema';
import {
  ADD_POST_MUTATION,
  DELETE_POST_MUTATION,
  POSTS_QUERY,
} from '../apollo/queries';

const Home: NextPage = () => {
  // 一覧データの取得
  const { data, refetch } = useQuery<{ posts: Query['posts'] }>(POSTS_QUERY);

  const [addPostMutation] = useMutation<
    Mutation['addPost'],
    MutationAddPostArgs
  >(ADD_POST_MUTATION);

  const [deletePostMutation] = useMutation<
    Mutation['deletePost'],
    MutationDeletePostArgs
  >(DELETE_POST_MUTATION);

  // 投稿の追加
  const addPost = async (form: FormState) => {
    await addPostMutation({ variables: form });
    await refetch();
  };

  // 投稿の削除
  const deletePost = async (id: number) => {
    await deletePostMutation({ variables: { id } });
    await refetch();
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
