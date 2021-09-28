module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/async/**/*.tsx',
    '!src/hooks/**/*.ts',
    '!src/templates/**/*.tsx',
    '!src/skeleton/**/*.tsx',
    '!src/contexts/**/*.tsx',
    '!src/utils/modules/**/*.ts',
    '!src/utils/exports/**/*.ts',
    '!src/services/**/*.ts',
    '!src/@types/**/*.d.ts',
    '!src/app/**/*.ts(x)?'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
