"use strict";

module.exports = {
  "env": {
    "es6": true,
    "webextensions": true
  },
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "globals": {
    "self": true
  },
  "rules": {
    // Enforce one true brace style (opening brace on the same line)
    // Allow single line (for now) because of the vast number of changes needed
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],

    // Enforce newline at the end of file, with no multiple empty lines.
    "eol-last": 2,

    // Disallow using variables outside the blocks they are defined
    "block-scoped-var": 2,

    // Allow trailing commas for easy list extension.  Having them does not
    // impair readability, but also not required either.
    "comma-dangle": 0,

    // Enforce spacing before and after comma
    "comma-spacing": [2, {"before": false, "after": true}],

    // Enforce one true comma style.
    "comma-style": [2, "last"],

    // Enforce curly brace conventions for all control statements.
    "curly": 2,

    // Enforce the spacing around the * in generator functions.
    "generator-star-spacing": [2, "after"],

    // Require space before/after arrow function's arrow
    "arrow-spacing": [2, { "before": true, "after": true }],

    // Enforces spacing between keys and values in object literal properties.
    "key-spacing": [2, {"beforeColon": false, "afterColon": true, "mode": "minimum"}],

    // Disallow the omission of parentheses when invoking a constructor with no
    // arguments.
    "new-parens": 2,

    // Disallow use of the Array constructor.
    "no-array-constructor": 2,

    // disallow use of the Object constructor
    "no-new-object": 2,

    // Disallow Primitive Wrapper Instances
    "no-new-wrappers": 2,

    // Disallow the catch clause parameter name being the same as a variable in
    // the outer scope, to avoid confusion.
    "no-catch-shadow": 2,

    // Disallow assignment in conditional expressions.
    "no-cond-assign": 2,

    // Disallow use of debugger.
    "no-debugger": 2,

    // Disallow deletion of variables (deleting properties is fine).
    "no-delete-var": 2,

    // Disallow duplicate arguments in functions.
    "no-dupe-args": 2,

    // Disallow duplicate keys when creating object literals.
    "no-dupe-keys": 2,

    // Disallow a duplicate case label.
    "no-duplicate-case": 2,

    // Disallow the use of empty character classes in regular expressions.
    "no-empty-character-class": 2,

    // Disallow assigning to the exception in a catch block.
    "no-ex-assign": 2,

    // Disallow adding to native types
    "no-extend-native": 2,

    // Disallow double-negation boolean casts in a boolean context.
    "no-extra-boolean-cast": 2,

    // Disallow unnecessary semicolons.
    "no-extra-semi": 2,

    // Disallow mixed spaces and tabs for indentation.
    "no-mixed-spaces-and-tabs": 2,

    // Disallow reassignments of native objects.
    "no-native-reassign": 2,

    // Disallow use of octal literals.
    "no-octal": 2,

    // Disallow comparisons where both sides are exactly the same.
    "no-self-compare": 2,

    // Disallow sparse arrays, eg. let arr = [,,2].
    // Array destructuring is fine though:
    // for (let [, breakpointPromise] of aPromises)
    "no-sparse-arrays": 2,

    // Disallow trailing whitespace at the end of lines.
    "no-trailing-spaces": 2,

    // Disallow use of the with statement.
    "no-with": 2,

    // Disallow comparisons with the value NaN.
    "use-isnan": 2,

    // Ensure that the results of typeof are compared against a valid string.
    "valid-typeof": 2,

    // disallow the use of object properties of the global object (Math and
    // JSON) as functions
    "no-obj-calls": 2,

    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": 2,

    // disallow use of void operator
    "no-void": 2,

    // Disallow Yoda conditions (where literal value comes first).
    "yoda": 2,

    // Require a space immediately following the // in a line comment.
    "spaced-comment": [2, "always"],

    // Require use of the second argument for parseInt().
    "radix": 2,

    // Require spaces before/after unary operators (words on by default,
    // nonwords off by default).
    "space-unary-ops": [2, { "words": true, "nonwords": false }],

    // Enforce spacing after semicolons.
    "semi-spacing": [2, {"before": false, "after": true}],

    // Disallow the use of Boolean literals in conditional expressions.
    "no-unneeded-ternary": 2,

    // Disallow use of multiple spaces (sometimes used to align const values,
    // array or object items, etc.). It's hard to maintain and doesn't add that
    // much benefit.
    "no-multi-spaces": 2,

    // Require spaces around operators, except for a|0.
    // Disabled for now given eslint doesn't support default args yet
    // "space-infix-ops": [2, {"int32Hint": true}],

    // Require a space around all keywords.
    "keyword-spacing": 2,

    // Disallow space between function identifier and application.
    "no-spaced-func": 2,

    // Disallow shadowing of names such as arguments.
    "no-shadow-restricted-names": 2,

    // Disallow use of comma operator.
    "no-sequences": 2,

    // Disallow use of assignment in return statement. It is preferable for a
    // single line of code to have only one easily predictable effect.
    "no-return-assign": 2,

    // Require return statements to either always or never specify values
    "consistent-return": 2,

    // Disallow padding within blocks.
    "padded-blocks": [2, "never"],

    // Disallow spaces inside parentheses.
    "space-in-parens": [2, "never"],

    // Require space after keyword for anonymous functions, but disallow space
    // after name of named functions.
    "space-before-function-paren": [2, {"anonymous": "never", "named": "never"}],

    // Disallow unreachable statements after a return, throw, continue, or break
    // statement.
    "no-unreachable": 2,

    // Always require use of semicolons wherever they are valid.
    "semi": [2, "always"],

    // Disallow empty statements. This will report an error for:
    // try { something(); } catch (e) {}
    // but will not report it for:
    // try { something(); } catch (e) { /* Silencing the error because ...*/ }
    // which is a valid use case.
    "no-empty": 2,

    // Disallow declaring the same variable more than once (we use let anyway).
    "no-redeclare": 2,

    // Warn about declaration of variables already declared in the outer scope.
    // This isn't an error because it sometimes is useful to use the same name
    // in a small helper function rather than having to come up with another
    // random name.  Still, making this a warning can help people avoid being
    // confused.
    "no-shadow": 2,

    // We use var-only-at-top-level instead of no-var as we allow top level
    // vars.
    "no-var": 0,

    // Disallow global and local variables that aren't used, but allow unused function arguments.
    "no-unused-vars": [2, {"vars": "all", "args": "none", "varsIgnorePattern": "EXPORTED_SYMBOLS|rest"}],

    // Require padding inside curly braces
    "object-curly-spacing": [2, "always"],

    // Disallow spaces inside of brackets
    "array-bracket-spacing": [2, "never"],

    // Disallow control characters in regular expressions
    "no-control-regex": 2,

    // Disallow invalid regular expression strings in RegExp constructors
    "no-invalid-regexp": 2,

    // Disallow multiple spaces in regular expression literals
    "no-regex-spaces": 2,

    // Disallow irregular whitespace
    "no-irregular-whitespace": 2,

    // Disallow negating the left operand in `in` expressions
    "no-negated-in-lhs": 2,

    // Allow constant expressions in conditions
    // With 2.11.0 we can enable this with checkLoops: false
    "no-constant-condition": [2, {"checkLoops": false}],

    // Disallow Regexs That Look Like Division
    "no-div-regex": 2,

    // Disallow Iterator (using __iterator__)
    "no-iterator": 2,

    // Enforce consistent linebreak style
    "linebreak-style": [2, "unix"],

    // Enforces return statements in callbacks of array's methods
    "array-callback-return": 2,

    // Verify super() calls in constructors
    "constructor-super": 2,

    // Disallow modifying variables of class declarations
    "no-class-assign": 2,

    // Disallow modifying variables that are declared using const
    "no-const-assign": 2,

    // Disallow duplicate name in class members
    "no-dupe-class-members": 2,

    // Disallow use of this/super before calling super() in constructors
    "no-this-before-super": 2,

    // Disallow duplicate imports
    "no-duplicate-imports": 2,

    // Disallow empty destructuring patterns
    "no-empty-pattern": 2,

    // Disallow Labeled Statements
    "no-labels": 2,

    // Disallow Multiline Strings
    "no-multi-str": 2,

    // Disallow Symbol Constructor
    "no-new-symbol": 2,

    // Disallow Initializing to undefined
    "no-undef-init": 2,

    // Disallow control flow statements in finally blocks
    "no-unsafe-finally": 2,

    // Disallow Unused Labels
    "no-unused-labels": 2,

    // Disallow unnecessary computed property keys on objects
    "no-useless-computed-key": 2,

    // Disallow unnecessary constructor
    "no-useless-constructor": 2,

    // Disallow renaming import, export, and destructured assignments to the
    // same name
    "no-useless-rename": 2,

    // Enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": [2, "never"],

    // Disallow usage of spacing in template string expressions
    "template-curly-spacing": [2, "never"],

    // Disallow the Unicode Byte Order Mark
    "unicode-bom": [2, "never"],

    // Enforce spacing around the * in yield* expressions
    "yield-star-spacing": [2, "after"],

    // Disallow Implied eval
    "no-implied-eval": 2,

    // Disallow unnecessary function binding
    "no-extra-bind": 2,

    // Disallow new For Side Effects
    "no-new": 2,

    // Disallow Self Assignment
    "no-self-assign": 2,

    // Disallow confusing multiline expressions
    "no-unexpected-multiline": 2,

    // Require IIFEs to be Wrapped
    "wrap-iife": [2, "inside"],

    // Disallow Unused Expressions
    "no-unused-expressions": 2,

    // Disallow function or var declarations in nested blocks
    "no-inner-declarations": 2,

    // Enforce newline before and after dot
    "dot-location": [2, "property"],

    // Disallow Use of caller/callee
    "no-caller": 2,

    // Disallow Case Statement Fallthrough
    "no-fallthrough": 2,

    // Disallow Floating Decimals
    "no-floating-decimal": 2,

    // Require Space Before Blocks
    "space-before-blocks": 2,

    // Operators always before the line break
    "operator-linebreak": [2, "after", { "overrides": { ":": "before", "?": "ignore"}}],

    // Restricts the use of parentheses to only where they are necessary
    // Disabled for now since this also removes parens around assignments, e.g. let foo = bar == baz
    // "no-extra-parens": [2, "all", { "conditionalAssign": false, "returnAssign": false, "nestedBinaryExpressions": false }],

    // Double quotes should be used.
    "quotes": [2, "double", { "avoidEscape": true }],

    // Disallow if as the only statement in an else block.
    "no-lonely-if": 2,

    // Not more than two empty lines with in the file, and no extra lines at
    // beginning or end of file.
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 0, "maxBOF": 0 }],

    // Make sure all setters have a corresponding getter
    "accessor-pairs": 2,

    // Enforce spaces inside of single line blocks
    "block-spacing": [2, "always"],

    // Disallow spaces inside of computed properties
    "computed-property-spacing": [2, "never"],

    // Require consistent this (using |self|)
    "consistent-this": [2, "self"],

    // Disallow unnecessary .call() and .apply()
    "no-useless-call": 2,

    // Disallow named function expressions
    "func-names": [2, "never"],

    // Enforce placing object properties on separate lines
    "object-property-newline": [2, { "allowMultiplePropertiesPerLine": true }],

    // Enforce consistent line breaks inside braces
    "object-curly-newline": [2, { "multiline": true }],

    // Disallow whitespace before properties
    "no-whitespace-before-property": 2,

    // Disallow unnecessary escape usage
    "no-useless-escape": 2,

    // Disallow mixes of different operators, but allow simple math operations.
    "no-mixed-operators": [2, {
        "groups": [
            /* ["+", "-", "*", "/", "%", "**"], */
            ["&", "|", "^", "~", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"]
        ]
    }],

    // Disallow unnecessary concatenation of strings
    "no-useless-concat": 2,

    // Disallow unmodified conditions of loops
    "no-unmodified-loop-condition": 2,

    // Suggest using arrow functions as callbacks
    "prefer-arrow-callback": [2, { "allowNamedFunctions": true }],

    // Suggest using the spread operator instead of .apply()
    "prefer-spread": 2,

    // Quoting style for property names
    "quote-props": ["error", "consistent-as-needed", { "keywords": true }],

    // Disallow negated conditions
    "no-negated-condition": 2,

    // Enforce a maximum number of statements allowed per line
    "max-statements-per-line": [2, { "max": 2 }],

    // Disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": 2,

    // Disallow Unnecessary Nested Blocks
    "no-lone-blocks": 2,

    // Enforce minimum identifier length
    "id-length": [2, {
      "min": 3,
      "exceptions": [
        /* jQuery */ "$",
        /* sorting */ "a", "b",
        /* exceptions */ "e", "ex",
        /* loop indices */ "i", "j", "k", "n",
        /* coordinates */ "x", "y",
        /* regexes */ "re",
        /* known words */ "rc", "rv", "id", "OS", "os", "db", "op",
        /* known html elements */ "tr", "td", "th",
        /* mail/calendar words */ "to", "cc",
        /* Components */ "Ci", "Cc", "Cu", "Cr",
      ]
    }],

    // Disallow lexical declarations in case/default clauses
    "no-case-declarations": 2,

    // Enforce consistent indentation (4-space)
    "indent": [2, 2, { "SwitchCase": 1 }],

    // The following rules will not be enabled currently, but are kept here for
    // easier updates in the future.
    "no-else-return": 0,
  }
};
