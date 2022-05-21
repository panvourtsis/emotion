module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(tsx|ts|js)?$': 'babel-jest'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__fixtures__/',
    '/site/',
    '/types/'
  ],
  setupFilesAfterEnv: ['<rootDir>/test/testSetup.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/babel-plugin/test/util.js'
  ],
  snapshotFormat: {
    escapeString: false,
    printBasicPrototype: false
  }
}
