import type { NextApiRequest, NextApiResponse } from 'next';
import { API_ROOT_PATH } from '../../../config/constants';

const handleGetRequest = async (
  id: string,
  nextApiResponse: NextApiResponse
) => {
  const response = await fetch(`${API_ROOT_PATH}/getPost?id=${id}`);
  const resPost = await response.json();
  nextApiResponse.status(200).json(resPost);
};

const handleDeleteRequest = async (
  id: string,
  nextApiResponse: NextApiResponse
) => {
  await fetch(`${API_ROOT_PATH}/deletePost?id=${id}`, { method: 'DELETE' });
  nextApiResponse.status(204).json('');
};

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const {
    query: { id },
  } = nextApiRequest;

  if (nextApiRequest.method === 'GET') {
    await handleGetRequest(id as string, nextApiResponse);
    return;
  }
  if (nextApiRequest.method === 'DELETE') {
    await handleDeleteRequest(id as string, nextApiResponse);
    return;
  }
};
