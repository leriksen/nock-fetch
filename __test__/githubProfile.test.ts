import "jest";

import { setupRecorder } from "nock-record";
import { getData } from "../src/githubProfile";

const record = setupRecorder();

describe("githubProfile", () => {
    describe("getData", () => {
        it("gets data on user from Github", async () => {
            const {completeRecording, assertScopesFinished} = await record("github1-data");
            const result = await getData('leriksen');
            completeRecording();
            assertScopesFinished();
            expect(result).toMatchSnapshot();
        });
        
        it("gets data on another user from Github", async () => {
            const {completeRecording, assertScopesFinished} = await record("github2-data");
            const result = await getData('edorivai');
            completeRecording();
            assertScopesFinished();
            expect(result).toMatchSnapshot();
        });
    });
});
