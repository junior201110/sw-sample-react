module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        indent: ["error", 4, { "SwitchCase": 1 }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "global-require": "error",
        "class-methods-use-this": "off",
        "prefer-const": "error",
        "no-use-before-define": "warn",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "arrowFunctions": true,
            "binaryLiterals": true,
            "blockBindings": true,
            "classes": true,
            "defaultParams": true,
            "destructuring": true,
            "forOf": true,
            "generators": true,
            "modules": true,
            "objectLiteralComputedProperties": true,
            "objectLiteralDuplicateProperties": true,
            "objectLiteralShorthandMethods": true,
            "objectLiteralShorthandProperties": true,
            "octalLiterals": true,
            "regexUFlag": true,
            "regexYFlag": true,
            "spread": true,
            "superInFunctions": true,
            "templateStrings": true,
            "unicodeCodePointEscapes": true,
            "globalReturn": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        },
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "extends": "eslint:recommended",
    "globals": {}
};