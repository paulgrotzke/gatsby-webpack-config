import path from "path";
//@ts-ignore
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        adasda: "asda",
        crypto: path.resolve("crypto-browserify123"),
      },
    },
  });
};
