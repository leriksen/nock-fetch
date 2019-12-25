module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    'jest-junit',
    [
      'jest-stare',
      {
        "coverageLink": "../coverage/index.html",
      }
    ]
 ],
  collectCoverage: true,
  coverageReporters: [ 'html', 'cobertura' ]
};
