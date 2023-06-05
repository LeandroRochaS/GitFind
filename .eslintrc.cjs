module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "plugin:react/jsx-runtime"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ["react", "prettier", "react-hooks"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/state-in-constructor": 0,
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "react/prop-types": [0],
    },
};
