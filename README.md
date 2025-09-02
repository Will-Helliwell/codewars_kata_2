# codewars_kata_2

## JS

### Setup

- `cd js && npm install`

### Running Tests

- setup jest sample test according to [tutorial](https://www.valentinog.com/blog/jest/)

Once in the js root folder:
- run all tests using `npm test`
- run a single specific test using `npm test -- myFilename`. You can also run part of the filename and it will run tests where any of the filenames contain a matching string (`npm test myFil`) [(detail on stack overflow)](https://stackoverflow.com/questions/28725955/how-do-i-test-a-single-file-using-jest)


## TS

Once in the ts root folder:
- compile your ts file to js using `tsc ./yourFile.ts`
- run your file using node `node ./yourFile.js`
- then delete the js file

Or in a single command: `tsc ./8_kyu/removeChar.ts && node ./8_kyu/removeChar.js && rm ./8_kyu/removeChar.js`

Or use the bash alias I have created (e.g. from within the ts directory) run: `./run_ts.sh ./8_kyu/removeChar.ts`