module.exports = {
  root: true,
  extends: [
    "plugin:@next/next/recommended",
    "@payloadcms",
    "airbnb",
    "prettier",
  ],
  ignorePatterns: ["**/payload-types.ts"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: false,
      },
    ],
  },
};
