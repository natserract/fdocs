
#!/bin/bash
rm -rf ./dist/salt/api/library/
mkdir ./dist/salt/api/library

ng run library:build:production --aot --output-path=tmp/ --main="projects/salt/api/library/app/components/compile.ts"
cat ./tmp/{runtime,polyfills,main}-es5.js > ./tmp/library.js
cp -r ./tmp/library.js ./dist/salt/api/library
rm -rf ./tmp/