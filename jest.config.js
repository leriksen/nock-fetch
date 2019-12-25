module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    'jest-junit',
    [
      'jest-stare',
      {
        "coverageLink": "../coverage/lcov-report/index.html",
      }
    ]
 ],
  collectCoverage: true
};
