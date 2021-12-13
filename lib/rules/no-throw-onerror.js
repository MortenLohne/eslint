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
        schema: [], // Add a schema if the rule has options
        messages: {
            avoidThrow: "Avoid throwing from onError(), as it has no effect."
        }
    },

    create(context) {
        // eslint-disable-next-line no-unused-vars -- yes
        const info = {

        };

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        /**
         * Returns the name of the parent function, or `undefined` if not inside a named function
         * @param {ASTNode} node AST node
         * @returns {string | undefined} function name
         */
        function parentFunctionName(node) {
            if (node.type === "Program") {
                return void "";
            }
            const parent = node.parent;

            // eslint-disable-next-line no-console -- yes
            console.log(`Got to ${node.type}`);
            if (node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") {

                // eslint-disable-next-line no-console -- yes
                console.log(`Got to ${parent.type}`);
                if (parent.type === "VariableDeclarator") {
                    return parent.id.name;
                }
                if (parent.type === "Property") {
                    return parent.key.name;
                }
                return void "";
            }
            if (node.type === "FunctionDeclaration") {
                return node.id.name;
            }
            return parentFunctionName(parent);
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            ThrowStatement(node) {

                // eslint-disable-next-line no-console -- yes
                console.log(`Got to function: "${parentFunctionName(node)}", triggered by "${context.getSourceCode().getText(node)} in ${context.getFilename()}`);

                if (parentFunctionName(node) === "onError") {
                    context.report({
                        node,
                        messageId: "avoidThrow"
                    });
                }
            }
        };
    }
};
