import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // Remove conflicting transform settings
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx',
      },
    }],
  },
  
  // Don't ignore node_modules for ESM packages
  transformIgnorePatterns: [
    'node_modules/(?!(lucide-react|@testing-library)/)',
  ],
  
  moduleNameMapper: {
    '^@/styles/tailwind.css$': '<rootDir>/__mocks__/cssMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  
  testMatch: ['**/?(*.)+(test|spec).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/e2e/'],  
  // Add these for better ESM support
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};

export default config;
