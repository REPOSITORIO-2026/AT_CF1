const titulo =
  'Fundamentos en tecnología aplicada en sistemas electromecánicos e industriales'

module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/css/_variables.sass"`,
      },
    },
  },
  chainWebpack: config => {
    // Mantener la configuración existente del título
    config.plugin('html').tap(args => {
      args[0].title = titulo
      return args
    })
  },
}
