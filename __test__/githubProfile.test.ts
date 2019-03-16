import "jest";

import { setupRecorder } from "nock-record";
import { getData } from "../src/githubProfile";

const record = setupRecorder();

describe("githubPrfile", () => {
    describe("getData", () => {

        it("gets data on user from Github", async () => {
            const {completeRecording, assertScopesFinished} = await record("github-data");
            const result = await getData('leriksen');
            completeRecording();
            assertScopesFinished();
            expect(result).toMatchSnapshot();
        });
    });
});
