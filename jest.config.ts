import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // Remove conflicting transform settings
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx', // This is crucial for JSX
      },
    }],
  },
  
  // Don't ignore node_modules for ESM packages
  transformIgnorePatterns: [
    'node_modules/(?!(lucide-react|@testing-library)/)',
  ],
  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  
  testMatch: ['**/?(*.)+(test|spec).[jt]s?(x)'],
  
  // Add these for better ESM support
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};

export default config;



// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'ts-jest/presets/default',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   transformIgnorePatterns: [
//     'node_modules/(?!lucide-react.*\\.js$)',
//   ],
//   transform: {
//     '^.+\\.tsx?$': [
//       'ts-jest',
//       {
//         useESM: true,
//         babelConfig: true,
//       },
//     ],
//   },
//   extensionsToTreatAsEsm: ['.ts', '.tsx'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '\\.(css|scss|sass)$': 'identity-obj-proxy',
//   },
//   testMatch: ['**/?(*.)+(test|spec).[jt]s?(x)'],
// };

// export default config;
