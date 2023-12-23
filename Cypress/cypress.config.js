const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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
  viewportHeight: 1080 
    
});

