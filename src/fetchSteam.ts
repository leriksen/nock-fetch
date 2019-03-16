import * as fetch from "node-fetch";

// if you ask 
// http://steamcommunity.com/market/priceoverview/?appid=730&currency=3&market_hash_name=StatTrak%E2%84%A2 M4A1-S | Hyper Beast (Minimal Wear)
//
// you'll get something like
// {"success":true,"lowest_price":"261,35&#8364; ","volume":"11","median_price":"269,52&#8364; "}

export interface SteamPriceData {
    lowest_price: string,
    median_price: string,
    success: boolean,
    volume: string
}
const getData = async (id: string, name: string): Promise<SteamPriceData> => {
    return {
        "success":true,
        "lowest_price":"261,35&#8364; ",
        "volume":"11",
        "median_price":"269,52&#8364; "
    };
};

exports.getData = getData;