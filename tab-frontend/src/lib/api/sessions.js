import client from './client';

export const wirtePost = ({ title, body, tags }) =>
  client.session('/api/session', { title, body, tags });
