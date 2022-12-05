const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // I added the below lines
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: "Ak software",
            owner: "Iman",
          },
        ],
        win: {
          target: ["nsis"],
          icon: "./public/mitbox.ico",
          requestedExecutionLevel: "requireAdministrator",
        },
        nsis: {
          installerIcon: "./public/mitbox.ico",
          uninstallerIcon: "./public/mitbox.ico",
          uninstallDisplayName: "./public/mitbox.ico",
          license: "license.txt",
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        },
      },
    },
  },
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "(en)",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
});
