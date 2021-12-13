/**
 * @fileoverview Ensure correct input to the execute handler in service tasks
 * @author Morten Lohne
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
module.exports = {
    meta: {
        type: "problem", // `problem`, `suggestion`, or `layout`
        docs: {
            description: "enforce correct input to the execute handler in service tasks",
            category: "Fill me in",
            recommended: false,
            url: "https://eslint.org/docs/rules/correct-service-execute-type" // URL to the documentation page for this rule
        },
        schema: [], // Add a schema if the rule has options
        messages: {
            incorrectServiceExecuteType: "Incorrect input to execute handler."
        }
    },

    create(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            context

            // visitor functions for different types of nodes
        };
    }
};
