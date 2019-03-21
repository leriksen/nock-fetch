import nodeFetch from 'node-fetch';

const generateDataUrl = (name: string): string => {
  return `https://api.github.com/users/${name}`;
};

export const getData = async (name: string): Promise<string> => {
  const dataUrl = generateDataUrl(name);
  const result = await nodeFetch(dataUrl);
  return await result.json();
};
