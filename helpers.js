var { lstatSync, readdirSync } = require('fs')
var { join } = require('path')
var {execSync} = require('child_process');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory);

// let arr = getDirectories("./projects/salt/api/library/app/components");
// (() => {
//   return 'projects/salt/api/library/app/components/button/button.ts'
// })()

const projects = ['angular-components-library', 'another-angular-components-library'];

console.log("hello");