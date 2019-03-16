import "jest";

import { setupRecorder } from "nock-record";
import { getData } from "../src/fetchSteam";
// import {defaultOptions} from '../helpers/nock';

const record = setupRecorder();

describe("fetchSteam", () => {
    describe("getData", () => {

        it("gets data from Steam", async () => {
            const {completeRecording, assertScopesFinished} = await record("steam-price-data");
            const result = await getData('578080', 'GAMESCOM INVITATIONAL CRATE');
            completeRecording();
            assertScopesFinished();
            expect(result).toMatchSnapshot();
        });
    });
});
