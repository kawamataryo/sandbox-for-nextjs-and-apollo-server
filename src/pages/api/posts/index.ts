import type { NextApiRequest, NextApiResponse } from 'next';
import { API_ROOT_PATH } from '../../../config/constants';

const handlePostRequest = async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const body = JSON.parse(nextApiRequest.body);

  const post = {
    title: body.title,
    content: body.content,
  };

  const response = await fetch(`${API_ROOT_PATH}/addPost`, {
    method: 'POST',
    body: JSON.stringify(post),
  });
  const postRes = await response.json();

  nextApiResponse.json(postRes);
};

const handleGetRequest = async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const response = await fetch(`${API_ROOT_PATH}/getPosts`);
  const resPosts = await response.json();
  nextApiResponse.status(200).json(resPosts);
};

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  if (nextApiRequest.method === 'POST') {
    await handlePostRequest(nextApiRequest, nextApiResponse);
    return;
  }
  if (nextApiRequest.method === 'GET') {
    await handleGetRequest(nextApiRequest, nextApiResponse);
    return;
  }
};
