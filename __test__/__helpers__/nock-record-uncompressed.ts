// Credit to https://codeburst.io/testing-mocking-http-requests-with-nock-480e3f164851
// for this helper

import { NockBackOptions, NockDefinition } from 'nock';
import zlib from 'zlib';

export const defaultOptions: NockBackOptions = {
  afterRecord: (outputs: NockDefinition[]): NockDefinition[] => {
    return outputs.map(output => makeCompressedResponsesReadable(output));
  },
};

export default defaultOptions;

const makeCompressedResponsesReadable = (scope) => {
  const gzipIndex = scope.rawHeaders.indexOf('gzip');
  if (gzipIndex > -1) {

    scope.rawHeaders.splice(gzipIndex - 1, 2);

    const contentLengthIndex = scope.rawHeaders.indexOf('Content-Length');
    if (contentLengthIndex > -1) {
      scope.rawHeaders.splice(contentLengthIndex - 1, 2);
    }

    const fullResponseBody =
            scope.response &&
            scope.response.reduce &&
            scope.response.reduce((previous, current) => previous + current);

    try {
            // eslint-disable-next-line no-param-reassign
      scope.response = JSON.parse(
                zlib.gunzipSync(Buffer.from(fullResponseBody, 'hex')).toString('utf8'),
            );
    } catch (e) {
            // eslint-disable-next-line no-param-reassign
      scope.response = '';
    }
  }
  return scope;
};
