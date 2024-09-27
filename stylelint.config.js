module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // "stylelint-config-standard",
        "stylelint-stylus/recommended",
    ],
    rules: {
        // override/add rules settings here, such as:
        // "stylus/declaration-colon": "never"
        "stylus/indentation": [
            4,
            {
                "severity": "warning"
            }
        ],
    },
};