const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7y8k5z',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress',
    },
    baseUrl:"http://automationpratice.com.br",
    defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
