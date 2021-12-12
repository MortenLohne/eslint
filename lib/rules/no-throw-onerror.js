/**
 * @fileoverview Disallow explicit throw in onError
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
            description: "disallow explicit throw in onError",
            category: "Fill me in",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-throw-onerror" // URL to the documentation page for this rule
        },
        fixable: null, // Or `code` or `whitespace`
        schema: [], // Add a schema if the rule has options
        messages: {
            avoidThrow: "Avoid throwing from onError(), as it has no effect."
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
