exports.mochaHooks = {
    beforeAll: () => {
        // called before loading of test cases
        // good to use db initialization data (f.ex. with sequelize-fixtures)
        // eslint-disable-next-line no-console
        console.log('Pre-tests initialization started 💪');
    },
    afterAll: () => {
        // called after all test completes (regardless of errors)
        // eslint-disable-next-line no-console
        console.log('All tests completed! 💖');
    }
};
