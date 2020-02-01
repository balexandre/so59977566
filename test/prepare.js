require('dotenv').config(); // as it's our first file to load when testing

const prepare = require('mocha-prepare');

prepare(
    done => {
        // called before loading of test cases
        // good to use db initialization data (f.ex. with sequelize-fixtures)
        // eslint-disable-next-line no-console
        console.log('Pre-tests initialization started');
        done();
    },
    done => {
        // called after all test completes (regardless of errors)
        // eslint-disable-next-line no-console
        console.log('All tests completed!');
        done();
    }
);
