
#!/bin/bash
search_dirs=($(ls projects/salt/api/library/app/components/))
rm -rf ./dist/salt/api/library/
mkdir ./dist/salt/api/library

for dir in ${search_dirs[*]}; do
    ng run library:build:production --aot --output-path=tmp/${dir} --main="projects/salt/api/library/app/components/${dir}/compile.ts"
    cat ./tmp/${dir}/{runtime,polyfills,main}-es5.js > ./tmp/${dir}.js
    cp -r ./tmp/${dir}.js ./dist/salt/api/library
    rm -rf ./tmp/
done