// queries github to see if the specifed user has indicated they are available for hire

import { default as fetch } from 'node-fetch';

const generateDataUrl = (name: string): string => {
  return `https://api.github.com/users/${name}`;
};

export const isHireable = async (name: string): Promise<boolean> => {
  const dataUrl = generateDataUrl(name);
  const result = await fetch(dataUrl);
  const json = await result.json();
  return json['hireable'] == true;
};
