//const projectName = process.env.PROJECT || 'testing001';
const projectArg = process.argv.find(arg => arg.startsWith('--project='));
const projectName = projectArg ? projectArg.split('=')[1] : 'defaultProject';
module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
    collectCoverage: true,
  coverageDirectory: 'coverage-jest',
  coverageReporters: ['html', 'lcov', 'text-summary'],
  collectCoverageFrom: [
// Includi i file .ts che vuoi coprire
`projects/${projectName}/src/app/**/*.ts`, 
// Escludi i file di test stessi
`!projects/${projectName}/src/app/**/*.spec.ts`,
// Se vuoi escludere index.ts, main.ts, ecc., fallo qui:
//'!projects/testing001/src/app/main.ts'

`!projects/${projectName}/src/app/**/app.config.ts`,
`!projects/${projectName}/src/app/**/app.routes.ts`,
    // Aggiungi eventuali file o cartelle che vuoi escludere
  ],
  // ...altre impostazioni

}
