const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer")


module.exports = defineConfig({
  
  //descomentar en caso de querer reports de mochawesome y junit
  
  /*reporters:"cypress-multi-reporters",
  reporterOptions:{
    configFile: "reporter-config.json"
  },*/
  projectId: "j3vb3i",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      allureWriter(on,config);
    },
  },
});


