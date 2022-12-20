module.exports = {
  // I added the below lines
  /*  publicPath: process.env.NODE_ENV === "production" ? "./" : "/", */

  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: [
        {
          publishr: "github",
          owner: "ImanBajalan",
          repo: "git@github.com:BajalanIman/verkehrsbox.git",
        },
      ],
      /* win: {
            target: ["nsis"],
          icon: "./public/mitbox.png",
          requestedExecutionLevel: "requireAdministrator", 
        },*/
      /* nsis: {
          installerIcon: "./public/mitbox.ico",
          uninstallerIcon: "./public/mitbox.ico",
          uninstallDisplayName: "./public/mitbox.ico",
          license: "license.txt",
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        }, */
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
};
