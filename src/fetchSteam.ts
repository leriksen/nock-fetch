// if you ask
// tslint:disable-next-line
// http://steamcommunity.com/market/priceoverview/?appid=730&currency=3&market_hash_name=StatTrak%E2%84%A2 M4A1-S | Hyper Beast (Minimal Wear)
//
// you'll get something like
// {"success":true,"lowest_price":"261,35&#8364; ","volume":"11","median_price":"269,52&#8364; "}

import nodeFetch from 'node-fetch';

export interface SteamPriceData {
  lowest_price: string;
  median_price: string;
  success: boolean;
  volume: string;
}

const generateDataUrl = (id: string, name: string) =>
  'https://steamcommunity.com/market/priceoverview/' +
  `?appid=${id}&country=DE&currency=3&market_hash_name=${encodeURIComponent(name.toUpperCase())}`;

export const getData = async (id: string, name: string): Promise<SteamPriceData> => {
  const dataUrl = generateDataUrl(id, name);
  const result = await nodeFetch(dataUrl);
  return await result.json();
};
