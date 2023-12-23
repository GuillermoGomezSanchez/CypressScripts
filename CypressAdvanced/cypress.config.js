const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');
const values = {};
const webpack = require('@cypress/webpack-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  addMatchImageSnapshotPlugin(on,config);

  //crearemos un plugin
  on('task',{
    guardar(valor){
      const key=Object.keys(valor)[0];
      values[key]=valor[key];
      return null;
    },
    obtener(key){
      console.log('values = ',values)
      return values[key] ?? 'No hay valor';
    }

  }),

  await preprocessor.addCucumberPreprocessorPlugin(on,config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  config.env.variable = process.env.NODE_ENV ?? "No hay variable";
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern:"**/*.feature",
    //specPattern: "cypress/e2e/*.cy.{js,jsx,ts,tsx}",
  },
  experimentalSessionAndOrigin: true,
  //retries:2 //ambos open y run por defecto 2, en el de abajo se especifica cuantos de cada tipo
  retries:{
    runMode:2,
    openMode:2
  },
  env:{
    credentials:{
      user: 'username',
      password: 'password'
    }
  }
});
