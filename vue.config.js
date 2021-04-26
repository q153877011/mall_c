module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        common: "@/common",
        network: "@/network",
        views: "@/views",
        assets: "@/assets",
        components: "@/components"
      }
    }
  },

  lintOnSave: false
};

module.exports = {
  lintOnSave: false
};
