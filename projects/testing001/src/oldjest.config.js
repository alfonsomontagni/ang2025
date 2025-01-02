module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/projects/testing001/setup-jest.ts"],
  globals: {
      'ts-jest': {
        // Modifica il percorso in base a dove si trova davvero tsconfig.spec.json:
        tsconfig: '<rootDir>/projects/testing001/tsconfig.spec.json'
      }
  }
}