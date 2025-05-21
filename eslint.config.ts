/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
/****************************************************/

/*************************************[ INTERFACES ]*/
import { Linter, FlatConfig } from '@typescript-eslint/utils/ts-eslint';
/****************************************************/
/************************************************************************/


/******************************************************[ ESLINT CONFIG ]*/
/******************************************[ TYPES ]*/
type RuleSet = Linter.RulesRecord;

type ExtendedConfig = FlatConfig.Config & {
    extends: FlatConfig.ConfigArray;
};
/****************************************************/


/*****************************************[ TARGET ]*/
// -- to target TS and TSX files only
const files: string[] = ['**/*.{ts,tsx}'];

// -- to ignore ESLint and Vite config files
const ignores: { ignores: string[] } = {
    ignores: ['eslint.config.ts', 'vite.config.ts']
};
/****************************************************/


/*******************************[ LANGUAGE OPTIONS ]*/
const languageOptions: FlatConfig.LanguageOptions = {
    // -- to indicate a browser ( frontend ) context
    globals: globals.browser,
    // -- to use the latest ECMAScript features
    ecmaVersion: 'latest',
    // -- to use ES modules ( import / export )
    sourceType: 'module',
    // -- to use TS config for type-based linting
    parserOptions: { project: './tsconfig.json' }
};
/****************************************************/


/***************************************[ TS RULES ]*/
// -- to use recommended TS linting rules
const basicTsRules: FlatConfig.ConfigArray = tseslint.configs.recommended;

// -- to enforce explicit type annotations in TypeScript
const additionalTsRules: RuleSet = {
    '@typescript-eslint/typedef': [
        'error', {
            // -- for variables
            variableDeclaration: true,
            // -- for function params
            parameter: true,
            // -- for class properties
            memberVariableDeclaration: true,
            // -- for object and interface properties
            propertyDeclaration: true
        }
    ]
};
/****************************************************/


/************************************[ REACT RULES ]*/
// -- to declare React plugins
const plugins: FlatConfig.Plugins = {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh
};

const reactRules: RuleSet = {
    // -- to use recommended React hooks linting rules
    ...reactHooks.configs.recommended.rules,
    // -- to use custom React refresh linting rules
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
};
/****************************************************/


/*****************************************[ CONFIG ]*/
const tsReactConfig: ExtendedConfig = {
    files,
    languageOptions,
    plugins,
    rules: { ...additionalTsRules, ...reactRules },
    extends: basicTsRules
};

const eslintConfig: FlatConfig.ConfigArray = tseslint.config(ignores, tsReactConfig);
/****************************************************/


export default eslintConfig;
/************************************************************************/