import 'jest';

import { default as nock } from 'nock';
import { setupRecorder } from 'nock-record';
import { isHireable } from '../src/isHireable';
import nockRecordUncompressed from './__helpers__/nock-record-uncompressed';

const record = setupRecorder();

describe('isHireable', () => {
  afterEach(nock.cleanAll);
  afterAll(nock.restore);

  describe('isHireable', () => {
    it('gets hireable status on an unhireable user from Github', async () => {
      const { completeRecording } = await record('unhireable-data',
                                                 nockRecordUncompressed);

      const result = await isHireable('edorivai');

      completeRecording();

      expect(result).toMatchSnapshot();
    });

    it('gets hireable status on a hireable user from Github', async () => {
      const { completeRecording } = await record('hireable-data',
                                                 nockRecordUncompressed);

      const result = await isHireable('leriksen');

      completeRecording();

      expect(result).toMatchSnapshot();
    });
  });
});
