module.exports = {
    testEnvironment: "jsdom",

    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.test.json",
            },
        ],
    },

    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],

    moduleNameMapper: {
        "\\.module\\.(css|sass|scss)$": "<rootDir>/src/test/__mocks__/styleMock.js",
        "\\.(css|less|sass|scss)$": "<rootDir>/src/test/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/src/test/__mocks__/fileMock.js"
    },

    setupFilesAfterEnv: [
        "<rootDir>/src/test/setup.ts"
    ],

    collectCoverage: true,

    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },

    coverageDirectory: "coverage",

    coverageReporters: [
        "text",
        "lcov",
        "html"
    ]
};