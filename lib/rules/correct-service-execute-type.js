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

            incorrectHandlerArity: "Task handlers take a single object as their parameter.",
            incorrectServiceExecuteType: "Incorrect property name in execute handler."
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
            ArrowFunctionExpression(node) {
                const parent = node.parent;
                // eslint-disable-next-line no-nested-ternary -- yes
                const name = parent.type === "VariableDeclarator"
                    ? parent.id.name
                    : (parent.type === "Property")
                        ? parent.key.name
                        : void "";

                if (name === "execute") {

                    const params = node.params;

                    // eslint-disable-next-line no-console -- yes
                    console.log(`Found execute function with param types ${params.map(p => p.type)}`);

                    if (params.length > 1) {
                        context.report({
                            node: params[0],
                            messageId: "incorrectHandlerArity"
                        });
                    } else if (params.length === 0) {
                        // eslint-disable-next-line no-useless-return -- yes
                        return;
                    } else if (params[0].type !== "ObjectPattern") {
                        context.report({
                            node: params[0],
                            messageId: "incorrectServiceExecuteType"
                        });
                    } else {
                        const allowedProperties = ["state", "variables", "meta"];

                        params[0].properties.forEach(property => {
                            if (property.type !== "Property") {
                                context.report({
                                    node: property,
                                    messageId: "incorrectServiceExecuteType"
                                });
                            } else {
                                const key = property.key;
                                const argName = key.type === "Literal" ? key.value : key.name;

                                if (!allowedProperties.includes(argName)) {
                                    context.report({
                                        node: property,
                                        messageId: "incorrectServiceExecuteType"
                                    });
                                }
                            }
                        });
                    }
                }
            }
        };
    }
};
