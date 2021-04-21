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
  }
};

module.exports = {
  lintOnSave: false
};
