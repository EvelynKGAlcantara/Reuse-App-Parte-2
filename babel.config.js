module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            ["babel-preset-expo", {
                jsxImportSource: "nativewind"
            }],
            "nativewind/babel"
        ],

        plugins: [
            ["module-resolver", {
                root: ["./"],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    "@": "./",
                    "tailwind.config": "./tailwind.config.js"
                }
            }]
        ]
    };
};
