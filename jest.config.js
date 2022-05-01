const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    // images
    '\\.(woff|woff2|gif|ico|jpg|jpeg|png|svg|webp|ogg|mp3|wav|mpg|mpeg)$':
      '<rootDir>/config/__mocks__/fileMock.js',

    // styles
    '\\.(css|sass|scss)$': 'identity-obj-proxy',

    // aliases
    '^@$': '<rootDir>/index.ts',
    '^@classes$': '<rootDir>/src/assets/js/model/classes/index.ts',
    '^@common$': '<rootDir>/src/assets/js/modules/common/index.ts',
    '^@files/(.*)$': '<rootDir>/src/assets/files/$1',
    '^@i18n$': '<rootDir>/src/assets/js/i18n/index.ts',
    '^@images/(.*)$': '<rootDir>/src/assets/images/$1',
    '^@interfaces$': '<rootDir>/src/assets/js/model/interfaces/index.ts',
    '^@model$': '<rootDir>/src/assets/js/model/index.ts',
    '^@modules$': '<rootDir>/src/assets/js/modules/index.ts',
    '^@sass/(.*)$': '<rootDir>/src/assets/sass/$1',
    '^@services$': '<rootDir>/src/assets/js/services/index.ts',
    '^@svg/(.*)$': '<rootDir>/src/assets/svg/$1',
    '^@utils$': '<rootDir>/src/assets/js/utils/index.ts',
  },
}

export default config
