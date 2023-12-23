const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://ultimateqa.com",
    setupNodeEvents(on, config) {

       on('task', {
          mylog (message) {
          console.log(message)
      
          return null
        }
      })

      // implement node event listeners here
    //ignore built-in test files
          //excludeSpecPattern: [
          //    "**/1-getting-started/.*.js",
          //    "**/2-advanced-examples/.*.js",
          //]
      //specPattern: "cypress/e2e/*.cy.{js,jsx,ts,tsx}"
     
    },
    specPattern: "cypress/e2e/*.cy.{js,jsx,ts,tsx}",
      
  },
  viewportWidth: 1920,
  viewportHeight: 1080//,
  //chromeWebSecurity: false
});

