import "jest";

import * as nock from "nock";
import fetch from "node-fetch";

import { getData, SteamPriceData } from "../src/fetchSteam";

describe("fetchSteam", () => {
    describe("getData", () => {
        afterAll(() => nock.restore());
        afterEach(() => nock.cleanAll());

        beforeAll(() => {
            nock(`http://steamcommunity.com`)
            .get(/^\/market\/priceoverview\/\?appid=578080&country=DE&currency=3&market_hash_name=GAMESCOM%20INVITATIONAL%20CRATE$/)
            .reply(
                200,
                {
                    lowest_price: "0,21€",
                    median_price: "0,20€",
                    success: true,
                    volume: "250"
                }
            );
        });

        it("gets data from Steam", async () => {
            return expect(await getData('578080', 'GAMESCOM INVITATIONAL CRATE')).toMatchSnapshot();
        });
    });
});
