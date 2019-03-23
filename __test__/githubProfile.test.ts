import 'jest';

import { default as nock } from 'nock';
import { setupRecorder } from 'nock-record';
import { getData } from '../src/githubProfile';
import nockRecordUncompressed from './__helpers__/nock-record-uncompressed';

const record = setupRecorder();

describe('githubProfile', () => {
  afterEach(nock.cleanAll);
  afterAll(nock.restore);

  describe('getData', () => {
    it('gets data on another user from Github', async () => {
      const { completeRecording } = await record('github2-data',
                                                 nockRecordUncompressed);

      const result = await getData('edorivai');

      completeRecording();

      expect(result).toMatchSnapshot();
    });

    it('gets data on user from Github', async () => {
      const { completeRecording } = await record('github1-data',
                                                 nockRecordUncompressed);

      const result = await getData('leriksen');

      completeRecording();

      expect(result).toMatchSnapshot();
    });
  });
});
