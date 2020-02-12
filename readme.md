# StackOverflow helper for question 59977566

Question can be found on [StackOverflow](https://stackoverflow.com/q/59977566/28004)

## Tests

Unit tests, integration tests and end-to-end tests are created in this project,
each section has it's own `readme.md` file with information of what should be tested

## Coverage

```batch
All tests completed!
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   93.46 |     87.5 |   78.26 |   94.74 | 
 server           |   77.42 |       50 |   16.67 |   82.76 | 
  server.js       |   77.42 |       50 |   16.67 |   82.76 | 27,28,30,31,44   
 server/routes    |     100 |      100 |     100 |     100 | 
  advanced.js     |     100 |      100 |     100 |     100 | 
  calculator.js   |     100 |      100 |     100 |     100 | 
  index.js        |     100 |      100 |     100 |     100 | 
 server/utilities |     100 |    94.44 |     100 |     100 | 
  api-table.js    |     100 |    92.86 |     100 |     100 | 28
  calculator.js   |     100 |      100 |     100 |     100 | 
  logger.js       |     100 |      100 |     100 |     100 | 
  parser.js       |     100 |      100 |     100 |     100 | 
------------------|---------|----------|---------|---------|-------------------
```

## Npm run

*remember to run `npm install` or `npm i` prior to run the commands below* 

 - `npm start` will start the server and you can use the `./test/_.http` file with [VSCode REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) 
 - `npm test` will start the tests (no need to prior start the server, Mocha [will start it automagically](https://www.chaijs.com/plugins/chai-http/))
 - `npm run coverage` will run code coverage using [IstanbulJs](https://www.npmjs.com/package/nyc), by executing all tests and report back to `./report` folder using a HTML report
