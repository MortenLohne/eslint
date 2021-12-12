/**
 * @fileoverview Disallow explicit throw in onError
 * @author Morten Lohne
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-throw-onerror"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-throw-onerror", rule, {
    valid: [
        {
            code: "var onError = ({ state, error }) => {\n" +
              "if (error) { return { patch: [] }; }\n" +
              " return { patch: [{ op: \"replace\", path: \"error\", value: error }] };\n" +
              "};",
            options: [],
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    experimentalObjectRestSpread: true
                }
            }
        }
    ],

    invalid: [
        {
            code: "var onError = ({ state, error }) => {\n" +
            "if (error) { throw error };\n" +
            "return { patch: [{ op: \"replace\", path: \"error\", value: error }] };\n" +
            "};",
            options: [],
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    experimentalObjectRestSpread: true
                }
            },
            errors: [{ messageId: "avoidThrow" }]
        }
    ]
});
