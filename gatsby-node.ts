import path from "path";
//@ts-ignore
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: path.resolve("crypto-browserify123"),
      },
    },
  });
};
