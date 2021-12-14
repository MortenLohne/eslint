/**
 * @fileoverview Ensure correct input to the execute handler in service tasks
 * @author Morten Lohne
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/correct-service-execute-type"),
    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("correct-service-execute-type", rule, {
    valid: [
        {
            code: "var executeLegal = ({ meta, x, state }) => { return null; }",
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
            code: "var execute = (input) => { return null; }",
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    experimentalObjectRestSpread: true
                }
            },
            errors: [{ messageId: "incorrectServiceExecuteType" }]
        },
        {
            code: "var execute = ({ meta, x, state }) => { return null; }",
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    experimentalObjectRestSpread: true
                }
            },
            errors: [{ messageId: "incorrectServiceExecuteType" }]
        },
        {
            code: "var execute = (meta, x, state) => { return null; }",
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    experimentalObjectRestSpread: true
                }
            },
            errors: [{ messageId: "incorrectHandlerArity" }]
        }
    ]
});
