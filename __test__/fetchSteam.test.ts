import 'jest';

import nock from 'nock';
import { setupRecorder } from 'nock-record';
import { getData } from '../src/fetchSteam';
import nockRecordUncompressed from './__helpers__/nock-record-uncompressed';

const record = setupRecorder();

describe('fetchSteam', () => {
  afterEach(nock.cleanAll);
  afterAll(nock.restore);

  describe('getData', () => {

    it('gets data from Steam', async () => {
      const { completeRecording } = await record(
          'steam-price-data',
          nockRecordUncompressed);
      const result = await getData('578080', 'GAMESCOM INVITATIONAL CRATE');
      completeRecording();
      expect(result).toMatchSnapshot();
    });
  });
});
