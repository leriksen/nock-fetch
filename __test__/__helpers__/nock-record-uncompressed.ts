// Credit to https://codeburst.io/testing-mocking-http-requests-with-nock-480e3f164851
// for this helper

import zlib from 'zlib';


// noinspection JSUnusedGlobalSymbols
export const defaultOptions: any = {
  afterRecord: (outputs: any[]): any[] => {
    return outputs.map(output => makeCompressedResponsesReadable(output));
  },
};

export default defaultOptions;

// as an assist to humans we store the responses as JSON, if we received
// it compressed, to make introspection and updating easier
const makeCompressedResponsesReadable = (scope) => {
  // look in the headers and see if the response is compressed
  const gzipIndex = scope.rawHeaders.indexOf('gzip');

  if (gzipIndex > -1) {
    // compressed, decompress it

    // remove the compression header, so we dont store it
    // note we looked for the index of the _value_ "gzip",
    // the header "Content-Encoding" _precedes_ this, hence the -1 in the splice
    scope.rawHeaders.splice(gzipIndex - 1, 2);

    // unchunk the response
    const fullResponseBody =
            scope.response &&
            scope.response.reduce &&
            scope.response.reduce((previous, current) => previous + current);

    try {
      // decompressed the response
      scope.response = JSON.parse(zlib.gunzipSync(Buffer.from(fullResponseBody, 'hex')).toString('utf8'));
    } catch (e) {
      console.warn(`unable to decompress response from ${scope.scope}/${scope.path} - ${e.message}`);
      scope.response = '';
    }

    // look in the headers and see if a Content-Length was set
    // if so, remove, as we store the raw JSON now, which doesnt have a length
    const contentLengthIndex = scope.rawHeaders.indexOf('Content-Length');
    if (contentLengthIndex > -1) {
      scope.rawHeaders.splice(contentLengthIndex, 2);
    }
  }
  return scope;
};
