module.exports = {
    globalSetup: './jest-global-setup.js',
    globals: {
        __PATH_PREFIX__: '',
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
        '^gatsby-core-utils/(.*)$': 'gatsby-core-utils/dist/$1', // Workaround for https://github.com/facebook/jest/issues/9771
        '^gatsby-page-utils/(.*)$': 'gatsby-page-utils/dist/$1', // Workaround for https://github.com/facebook/jest/issues/9771
        '^gatsby-plugin-utils/(.*)$': [
            'gatsby-plugin-utils/dist/$1',
            'gatsby-plugin-utils/$1',
        ], // Workaround for https://github.com/facebook/jest/issues/9771
    },
    modulePathIgnorePatterns: ['<rootDir>/.cache'],
    reporters: [
        'default',
        'jest-junit'
    ],
    setupFiles: ['<rootDir>/jest-loadershim.js'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup-test-env.js'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
    },
    transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
};
