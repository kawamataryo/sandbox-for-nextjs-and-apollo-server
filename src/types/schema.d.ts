export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};








export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  result?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPost?: Maybe<Post>;
  deletePost?: Maybe<DeleteResponse>;
  addUser?: Maybe<User>;
};


export type MutationAddPostArgs = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};


export type MutationDeletePostArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationAddUserArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};
