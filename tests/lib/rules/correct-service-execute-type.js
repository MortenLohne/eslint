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

    // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "execute: async (input) => { return; }",
            errors: [{ message: "Fill me in.", type: "Me too" }]
        }
    ]
});
