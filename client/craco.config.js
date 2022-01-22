const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // Refer to docs - https://ant.design/docs/react/customize-theme-cn
            modifyVars: { 
                '@primary-color': '#0D9488'                
                },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
