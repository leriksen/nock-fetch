import "jest";

import { getData, SteamPriceData } from "../src/fetchSteam";

describe("fetchSteam", () => {
    describe("getData", () => {
        it("gets data from Steam", async () => {
            return expect(await getData('578080', 'GAMESCOM INVITATIONAL CRATE')).toEqual({
                lowest_price: "0,21€",
                median_price: "0,20€",
                success: true,
                volume: "250"
            });
        });
    });
});